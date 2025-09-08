import { configureStore } from "@reduxjs/toolkit";
import { counterslice } from "../contact/CounterReducer";
import { catalogApi } from "../Features/catalog/catalogApi";
import { errorApi } from "../about/errorApi"; // 👈 استورد الـ errorApi
import { uislice } from "../layout/uiSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [errorApi.reducerPath]: errorApi.reducer, 
    counter: counterslice.reducer,
    ui: uislice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(catalogApi.middleware)
      .concat(errorApi.middleware), 
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
