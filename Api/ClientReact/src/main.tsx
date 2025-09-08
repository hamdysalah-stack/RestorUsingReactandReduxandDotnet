import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./app/Store/store.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const store = configureStore();
// console.log(store.getState());
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}

    <Provider store={store}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <RouterProvider router={router}  />
    </Provider>
  </StrictMode>
);




  