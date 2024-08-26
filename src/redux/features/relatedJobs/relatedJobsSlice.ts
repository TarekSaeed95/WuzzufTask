import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RelatedJobsState {
    relatedJobsIds: {skillsIds:string[],jobsIds:string[]} | undefined
}

const initialState: RelatedJobsState = {
  relatedJobsIds: undefined,
};
export const relatedJobsSlice = createSlice({
  name: "relatedJobs",
  initialState,
  reducers: {
    setRelatedJobsIds: (state, action: PayloadAction<{skillsIds:string,jobsIds:string[]}>) => {
      if(state.relatedJobsIds){
         state.relatedJobsIds.skillsIds = [...state.relatedJobsIds.skillsIds,action.payload.skillsIds];
         state.relatedJobsIds.jobsIds = [...new Set([...state.relatedJobsIds.jobsIds,...action.payload.jobsIds])];
      }
      else {
        state.relatedJobsIds = {skillsIds:[action.payload.skillsIds],jobsIds:[...action.payload.jobsIds]};
      }
    },
  },
});
export const { setRelatedJobsIds } = relatedJobsSlice.actions;
export default relatedJobsSlice.reducer;

