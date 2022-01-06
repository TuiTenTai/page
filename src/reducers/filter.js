const initState = {
  search: "",
  type: "",
  status: "",
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter/Search_change": {
      return {
        ...state,
        search: action.payload,
      };
    }

    case "filter/Type_change": {
      return {
        ...state,
        type: action.payload,
      };
    }

    case "filter/Status_change": {
      return {
        ...state,
        status: action.payload,
      };
    }

    default:
      return state;
  }
};

// Selector
export const searchSelector = (state) => state.filter.search;
export const typeSelector = (state) => state.filter.type;
export const statusSelector = (state) => state.filter.status;

export default filterReducer;
