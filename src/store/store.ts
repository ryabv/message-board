import {configureStore, combineReducers} from '@reduxjs/toolkit';
import channelsReducer from './reducers/channelsSlice';


const rootReducer = combineReducers({
  channelsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

