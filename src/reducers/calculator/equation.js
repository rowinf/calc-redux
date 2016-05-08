
import {INCREMENT} from 'actions/const';
import {ENTER_VALUE} from 'actions/const';

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  value: 0
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case INCREMENT:
      nextState.value++;
      return nextState;
    case ENTER_VALUE:
      nextState.value = action.parameter;
      return nextState;
    default:
      /* Return original state if no actions were consumed. */
      return state;
  }
}
