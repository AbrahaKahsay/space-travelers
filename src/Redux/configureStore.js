import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/Rockets';

const rootReducer = combineReducers({
    Rockets: rocketsReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;
