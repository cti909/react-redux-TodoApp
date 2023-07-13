// const initState = {
//   filters: {
//     search: '',
//     status: 'All',
//     priority: []
//   },
//   todoList: [
//     {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
//     {id: 2, name: 'Learn Redux', completed: false, priority: 'High'},
//     {id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low'}
//   ]
// }

import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodosSlice"

console.log("reducer public")
// const rootReducer = (state={}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   }

  // console.log(action, state)
  // /**
  //  * kiem tra type action
  //  * {
  //  *    type: '',
  //  *    payload: ''
  //  * }
  //  */
  // switch (action.type) {
  //   case 'todoList/addTodo':
  //     return {
  //       ...state, // cap nhat lai state
  //       todoList: [ // cap nhat lai todoList
  //         ...state.todoList,
  //         action.payload
  //       ]
  //     }
  //   case 'filters/searchFilterChange':
  //     return {
  //       ...state, // cap nhat lai state
  //       filters: { // cap nhat lai todoList
  //         ...state.todoList,
  //         search: action.payload
  //       }
  //     }
  //   default:
  //     return state
  // }
// }

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
})

export default rootReducer