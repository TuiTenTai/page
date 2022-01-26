import { Data } from 'state/action-types/data';
import { Action, ActionType } from 'state/action-types/form';
import { RootState } from '.';

export interface FormState {
  show: boolean;
  type: 'add' | 'edit';
  content: Data;
}

const initState: FormState = {
  show: false,
  type: 'add',
  content: {
    _id: '',
    name: '',
    link: '',
    img: '',
    type: 'anime',
    status: 'later',
  },
};

const formReducer = (state: FormState = initState, action: Action): FormState => {
  switch (action.type) {
    case ActionType.REVERSESHOWVALUE: {
      return {
        ...state,
        show: !state.show,
      };
    }

    case ActionType.CHANGETYPE: {
      return {
        ...state,
        type: action.payload,
      };
    }

    case ActionType.CHANGECONTENT: {
      return {
        ...state,
        content: action.payload,
      };
    }

    case ActionType.RESETCONTENT: {
      return {
        ...state,
        content: initState.content,
      };
    }

    default:
      return state;
  }
};

export const isFormShowSelector = (state: RootState): boolean => state.form.show;
export const formTypeSelector = (state: RootState): string => state.form.type;
export const formContentSelector = (state: RootState): Data => state.form.content;

export default formReducer;
