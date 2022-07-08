import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authAPI } from "../API/authService";

import auth from "./authSlice";

const RootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  auth,
});
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware),
});
