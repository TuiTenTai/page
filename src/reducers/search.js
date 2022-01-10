const initState = {
  value: "",
};

export const changeSearchValue = "filter/Change_search_value";

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case changeSearchValue: {
      return {
        ...state,
        value: action.payload,
      };
    }

    default:
      return state;
  }
};

export const searchSelector = (state) => state.search.value;

export default filterReducer;
