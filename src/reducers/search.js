const initState = {
  value: "",
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "search/Change_value": {
      return {
        ...state,
        value: action.payload,
      };
    }

    default:
      return state;
  }
};

// Selector
export const searchSelector = (state) => state.search.value;

export default filterReducer;
