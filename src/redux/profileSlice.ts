import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ProfileState {
  scrollState: 'Up' | 'Down';
}

const initialState = { scrollState: 'Down' } as ProfileState;

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    changeScrollState: (state, action: PayloadAction<'Up' | 'Down'>) => {
      state.scrollState = action.payload;
    },
  },
});

export const { changeScrollState } = profileSlice.actions;
export default profileSlice.reducer;
