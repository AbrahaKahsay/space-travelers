import { configureStore } from '@reduxjs/toolkit';
import missions from './Mission/Mission';
import rockets from './Rockets/Rockets';

const store = configureStore({
    reducer: {
        missions: missions.reducer,
        rockets: rockets.reducer,
    },
});

export default store;