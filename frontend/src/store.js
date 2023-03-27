import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./reduxSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
