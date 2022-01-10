const initState = {
  isShow: false,
  type: "add",
  content: {
    _id: "",
    name: "",
    link: "",
    img: "",
    type: "anime",
    status: "later",
  },
};

export const formReverseIsShowValue = "form/reverseIsShowValue";
export const formChangeType = "form/changeType";
export const formChangeContentValue = "form/changeContentValue";
export const fromResetContentValue = "form/resetContentValue";

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case formReverseIsShowValue: {
      return {
        ...state,
        isShow: !state.isShow,
      };
    }

    case formChangeType: {
      return {
        ...state,
        type: action.payload,
      };
    }

    case formChangeContentValue: {
      const newContentValue = action.payload;

      return {
        ...state,
        content: {
          _id: newContentValue._id,
          name: newContentValue.name,
          link: newContentValue.link,
          img: newContentValue.img,
          type: newContentValue.type,
          status: newContentValue.status,
        },
      };
    }

    case fromResetContentValue: {
      return {
        ...state,
        content: initState.content,
      };
    }

    default:
      return state;
  }
};

export const isFormShowSelector = (state) => state.form.isShow;
export const formTypeSelector = (state) => state.form.type;
export const formContentSelector = (state) => state.form.content;

export default formReducer;
