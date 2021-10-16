import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface PostState {
  loading: boolean;
  error: string | undefined;
}

const initialState = {
  loading: false,
  error: undefined,
} as PostState;

export const postWriteInStorage = createAsyncThunk(
  'users/kakaoSignupInStorage',
  async ({ accessToken }: { accessToken: Array<string> | undefined }) => {
    const response = await axios.post(
      `https://fat-impala-57.loca.lt/api/board/write/:id`,
      {},
      {
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        withCredentials: true,
      },
    );
    return response?.data;
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = postSlice.actions;
export default postSlice.reducer;
