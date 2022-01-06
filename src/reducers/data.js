const initState = {
  pending: true,
  data: [],
  err: null,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "data/Fetch_success": {
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    }

    case "data/Fetch_fail": {
      return {
        ...state,
        pending: false,
        err: action.error,
      };
    }

    case "data/Add": {
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    }

    case "data/Update": {
      const cloneData = [...state.data];
      const oldDataIndex = cloneData.indexOf(
        cloneData.filter((item) => item._id === action.payload._id)[0]
      );
      cloneData[oldDataIndex] = action.payload;
      return {
        ...state,
        data: cloneData,
      };
    }

    case "data/Delete": {
      const cloneData = [...state.data];
      const oldDataIndex = cloneData.indexOf(
        cloneData.filter((item) => item._id === action.payload._id)[0]
      );
      cloneData.splice(oldDataIndex, 1);
      return {
        ...state,
        data: cloneData,
      };
    }

    default:
      return state;
  }
};

// Selector
export const dataSelector = (state) => state.data.data;
export const pendingSelector = (state) => state.data.pending;
export const errSelector = (state) => state.data.err;

export default dataReducer;
