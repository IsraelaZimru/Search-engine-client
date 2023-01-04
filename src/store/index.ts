import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TPerson } from "../data/types";

const initialState: {
  names: TPerson[];
  lastPerson: TPerson | null;
  showResult: boolean;
} = {
  names: [],
  lastPerson: null,
  showResult: false,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeopleFromDB(state, action) {
      state.names = action.payload;
    },
    newPerson(state, action) {
      state.lastPerson = action.payload;
      state.names.push(action.payload);
      state.showResult = true;
    },
    deleteOne(state, action) {
      const personId = action.payload;
      state.names = state.names.filter((item) => item._id !== personId);
    },
    CloseModel(state, action) {
      state.showResult = false;
    },
    ShowModel(state, action) {
      state.showResult = true;
    },
  },
});

const store = configureStore({
  reducer: peopleSlice.reducer,
});

export const peopleActions = peopleSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;
