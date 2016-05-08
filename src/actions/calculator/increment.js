import {INCREMENT} from 'actions/const';

module.exports = function(parameter) {
  return { type: INCREMENT, parameter };
};
