import {
  CHANGE_INPUT_VALUE,
  CHANGE_TODO_ITEM,
  DELETE_ITEM,
} from "./actionTypes";
const defaultState = {
  inputValue: '123',
  list: [1, 2]
}
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === CHANGE_TODO_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, newState.inputValue];
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}