import { configureStore } from '@reduxjs/toolkit';
import userLocationReducer from './reducers';

const store = configureStore({
    reducer: {
        userLocation: userLocationReducer,
    },
});

export default store;