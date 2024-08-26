import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface SearchState {
  searchTerm: string;
  searchTermHistory: string[];
}

const initialState: SearchState = {
  searchTerm: "",
  searchTermHistory: [],
};
export const searchSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSearchTermHistory: (state, action: PayloadAction<string>) => {
      if(!state.searchTermHistory.includes(action.payload))state.searchTermHistory.push(action.payload);
    }
  },
});
export const { setSearchTerm, setSearchTermHistory } = searchSlice.actions;
export default searchSlice.reducer;
