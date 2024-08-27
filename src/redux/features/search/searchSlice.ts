import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: "",
};
export const searchSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  },
});
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
