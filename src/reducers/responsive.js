const initState = {
  value: window.innerWidth >= 600 ? false : true,
};

export const isResponsiveChangeValue = "isResponsive/Change_value";

const isResponsiveReducer = (state = initState, action) => {
  switch (action.type) {
    case isResponsiveChangeValue: {
      return {
        ...state,
        value: window.innerWidth >= 600 ? false : true,
      };
    }

    default:
      return state;
  }
};

export const isResponsiveSelector = (state) => state.isResponsive.value;

export default isResponsiveReducer;
