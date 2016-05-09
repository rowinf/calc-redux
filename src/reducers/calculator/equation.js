
import {PLUS, ENTER_VALUE, EQUALS} from 'actions/const';
import leftPad from 'left-pad';

const assign = Object.assign;

function appendString(appendee, appender, spaces = 0) {
  return appendee + leftPad(appender, spaces + appender.toString().length);
}

function appendOperand(nextState, action) {
  return assign(nextState, {
    operator: null,
    expression: appendString(nextState.expression, action.parameter, 1),
    freshInput: false
  })
}

function appendInput(nextState, action) {
  return assign(nextState, {
    expression: appendString(nextState.expression, action.parameter)
  });
}

function freshInput(nextState, action) {
  return assign(nextState, {
    freshInput: false,
    expression: action.parameter.toString()
  });
}

function enterValue(nextState, action) {
  if (nextState.operator) {
    return appendOperand(nextState, action);
  } else if (nextState.freshInput) {
    return freshInput(nextState, action);
  } else {
    return appendInput(nextState, action);
  }
}

function setOperator(nextState, action) {
  return assign(nextState, {
    operator: action.type,
    expression: appendString(nextState.expression, action.parameter, 1)
  });
}

function evaluate(nextState) {
  return assign(nextState, {
    operator: null,
    expression: eval(nextState.expression),
    freshInput: true
  })
}

/* Define your initial state here.
 */
const initialState = {
  operator: null,
  expression: '0',
  freshInput: true
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = assign({}, state);

  switch(action.type) {
    case ENTER_VALUE:
      return enterValue(nextState, action);
    case PLUS:
      return setOperator(nextState, action);
    case EQUALS:
      return evaluate(nextState, action);
    default:
      /* Return original state if no actions were consumed. */
      return state;
  }
}
