import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import rocketsReducer from './Rockets/Rockets';
import missionsReducer from './Mission/Missions';

const rootReducer = combineReducers({
  // Rockets: rocketsReducer,
  Missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;