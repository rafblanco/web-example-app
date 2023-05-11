import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import localStorage from "redux-persist/es/storage";

import { authSlice } from "./authSlice";

const rootPersistConfig = {
  key: "root",
  storage: localStorage,
  blacklist: ["api"],
};

const rootReducer = combineReducers({
  // api: apiInstance.reducer,
  authSlice: authSlice.reducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>;
