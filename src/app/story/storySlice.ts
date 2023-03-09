import { createSlice } from '@reduxjs/toolkit'
import { storyType } from '../../types/story';

const initialState: { story: storyType } = { story: null };

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    saveStory: (state, action: {payload: storyType}) => {
      state.story = action.payload;
    },
    removeStory: (state) => {
      state.story = null;
    },
  },
})

export const { saveStory, removeStory } = storySlice.actions;

export default storySlice.reducer;