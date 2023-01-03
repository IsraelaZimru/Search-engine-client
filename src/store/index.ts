import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TPerson } from "../data/types";

const names: TPerson[] = [];
const initialState = {
  names,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeopleFromDB(state, action) {
      state.names = action.payload;
    },
  },
});

const store = configureStore({
  reducer: peopleSlice.reducer,
});

export const peopleActions = peopleSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;
