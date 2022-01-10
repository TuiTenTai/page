const initState = {
  pending: true,
  data: [],
  err: null,
};

export const dataFetchSuccess = "data/Fetch_success";
export const dataFetchFail = "data/Fetch_fail";
export const dataAddNew = "data/Add";
export const dataUpdate = "data/Update";
export const dataDelete = "data/Delete";

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case dataFetchSuccess: {
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    }

    case dataFetchFail: {
      return {
        ...state,
        pending: false,
        err: action.error,
      };
    }

    case dataAddNew: {
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    }

    case dataUpdate: {
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

    case dataDelete: {
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

export const dataSelector = (state) => state.data.data;
export const pendingSelector = (state) => state.data.pending;
export const errSelector = (state) => state.data.err;

export default dataReducer;
