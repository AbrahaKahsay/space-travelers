import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import misssionsReducer from './Missions';
//import rocketsReducer from './Rockets/Rockets';
//import rocketsReducer from '../components/Rockets/Rockets';

const store = configureStore({
  reducer: {
    //rockets: rocketsReducer,
    missions: misssionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
