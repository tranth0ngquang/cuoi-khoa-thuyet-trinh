// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk"; // Import chính xác theo các exports có sẵn

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
