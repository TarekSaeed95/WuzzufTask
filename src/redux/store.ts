import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import relatedJobsReducer from "./features/relatedJobs/relatedJobsSlice";
import searchHistoryReducer from "./features/searchHistory/searchHistorySlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['searchHistory']
}

const persistedReducer = persistReducer(persistConfig,combineReducers({
  search: searchReducer,
  relatedJobs: relatedJobsReducer,
  searchHistory: searchHistoryReducer
}))

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)
