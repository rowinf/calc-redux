
import {PLUS, ENTER_VALUE, EQUALS} from 'actions/const';
import leftPad from 'left-pad';

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  value: 0,
  operator: null,
  expression: ''
};

function nextOperand(nextState, action) {
  nextState.operator = null;
  nextState.value = action.parameter;
  nextState.expression += leftPad(action.parameter, 2);
  return nextState;
}

function append(nextState, action) {
  nextState.value = parseInt(nextState.value + action.parameter.toString());
  nextState.expression += action.parameter.toString();
  return nextState;
}

function enterValue(nextState, action) {
  if(nextState.operator) {
    return nextOperand(nextState, action)
  } else {
    return append(nextState, action)
  }
}

function setOperator(nextState, action) {
  nextState.operator = action.type;
  nextState.expression += leftPad(action.parameter, 2);
  return nextState;
}

function evaluate(nextState) {
  nextState.operator = null;
  nextState.expression = eval(nextState.expression);
  return nextState;
}

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

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
