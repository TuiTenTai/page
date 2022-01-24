import { combineReducers } from 'redux';
import dataReducer from './data';
import formReducer from './form';
import isResponsiveReducer from './responsive';
import searchReducer from './search';

const rootReducer = combineReducers({
  data: dataReducer,
  form: formReducer,
  isResponsive: isResponsiveReducer,
  search: searchReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
