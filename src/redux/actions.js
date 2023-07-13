// export const addTodoList = {
//     type: 'todoList/addTodo',
//     payload: {id: 5, name: 'Learn Football', completed: false, priority: 'Medium'}
// }

console.log("action public");

export const addTodo = (data) => {
  console.log("action addTodo");
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  console.log("action toggleTodoStatus");
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  console.log("action searchFilterChange");
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  console.log("action statusFilterChange");
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  console.log("action prioritiesFilterChange");
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
// action creators -> function
