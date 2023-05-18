import {
  Action,
  AnyAction,
  configureStore,
  createAction,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore } from "redux-persist";

//   import apiInstance from "../apis";
import { persistedReducer, RootState } from "./rootReducer";
//   import { rtkQueryErrorLogger } from "./ErrorMiddleware";

const resetType = "RESET_STORE";

export const resetAction = createAction(resetType);

function reducer(state: RootState | undefined, action: any) {
  if (action.type === resetType) {
    state = undefined;
  }

  return persistedReducer(state, action);
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //   .concat([apiInstance.middleware, rtkQueryErrorLogger]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk<T = void> = ThunkAction<
  T,
  RootState,
  null,
  Action<string>
>;

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

setupListeners(store.dispatch);
