import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterslice } from "../contact/CounterReducer";
import { legacy_createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../Features/catalog/catalogApi";
import { uislice } from "../layout/uiSlice";

export function configureTheStore() {
  return legacy_createStore(counterReducer);
}

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    counter: counterslice.reducer,
    ui: uislice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
