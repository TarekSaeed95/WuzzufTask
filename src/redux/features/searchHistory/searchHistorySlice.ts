import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface SearchHistoryState {
  searchTermHistory: string[];
}

const initialState: SearchHistoryState = {
  searchTermHistory: [],
};
export const searchHistorySlice = createSlice({
  name: "searchTermHistory",
  initialState,
  reducers: {
    setSearchTermHistory: (state, action: PayloadAction<string>) => {
      if(!state.searchTermHistory.includes(action.payload))state.searchTermHistory.push(action.payload);
    }
  },
});
export const { setSearchTermHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
