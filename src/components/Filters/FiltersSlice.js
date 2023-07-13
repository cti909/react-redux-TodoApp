const initState = {
  search: "",
  status: "All",
  priorities: [],
};
console.log("reducer filter");
const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      console.log("reducer searchFilterChange");
      return {
        // cap nhat lai todoList
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterChange":
      console.log("reducer statusFilterChange");
      return {
        // cap nhat lai todoList
        ...state,
        status: action.payload,
      };
    case "filters/prioritiesFilterChange":
      console.log("reducer prioritiesFilterChange");
      return {
        // cap nhat lai todoList
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
