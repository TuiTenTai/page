const initState = {
  search: "",
  pageCount: 1,
};

export const changeSearchValue = "filter/Change_search_value";
export const changeCountValue = "filter/Change_pageCount_value";

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case changeSearchValue: {
      return {
        ...state,
        search: action.payload,
      };
    }

    case changeCountValue: {
      return {
        ...state,
        pageCount: action.payload,
      };
    }

    default:
      return state;
  }
};

export const searchSelector = (state) => state.filter.search;
export const pageCountSelector = (state) => state.filter.pageCount;

export default filterReducer;
