import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./features/stages/stageSlice.js";
export const store = configureStore({
  reducer: stageReducer,
});
