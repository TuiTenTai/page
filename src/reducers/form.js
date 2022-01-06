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

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case "form/reverseIsShowValue": {
      return {
        ...state,
        isShow: !state.isShow,
      };
    }

    case "form/changeFormType": {
      return {
        ...state,
        type: action.payload,
      };
    }

    case "form/changeContentValue": {
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

    case "form/resetContentValue": {
      return {
        ...state,
        content: initState.content,
      };
    }

    default:
      return state;
  }
};

// Selector
export const isFormShowSelector = (state) => state.form.isShow;
export const formTypeSelector = (state) => state.form.type;
export const formContentSelector = (state) => state.form.content;

export default formReducer;
