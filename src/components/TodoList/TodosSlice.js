const initState = [
  { id: 1, name: "Learn Yoga", completed: true, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: false, priority: "High" },
  { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
];

console.log("reducer todo");
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      console.log("reducer filter run");
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      console.log("reducer filter run");
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
