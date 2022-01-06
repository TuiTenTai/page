const initState = {
  value: window.innerWidth >= 600 ? false : true,
};

const isResponsiveReducer = (state = initState, action) => {
  switch (action.type) {
    case "isResponsive/ChangeValue": {
      return {
        ...state,
        value: window.innerWidth >= 600 ? false : true,
      };
    }

    default:
      return state;
  }
};

// Selector
export const isResponsiveSelector = (state) => state.isResponsive.value;

export default isResponsiveReducer;
