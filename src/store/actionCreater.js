import {
  CHANGE_INPUT_VALUE,
  CHANGE_TODO_ITEM,
  DELETE_ITEM,
} from "./actionTypes";

export const changeInputValue = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
})

export const changeTodoItem = (value) => ({
  type:CHANGE_TODO_ITEM
})

export const deleteItem = (index) => ({
  type:DELETE_ITEM,
  index
})





