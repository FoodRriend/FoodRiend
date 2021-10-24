import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import dev from '../config/env';
import axios from 'axios';

export type userType = {
  kakaoId: number | undefined;
  email: string | null;
  loginType: string | undefined;
  name: string | undefined;
  nickname: string | undefined;
  profileImage: string | null;
  foodType: string | undefined;
  foodStyle: string | undefined;
  cntFriend: number | undefined;
};

export type countType = {
  ate: number | undefined;
  want: number | undefined;
  best: number | undefined;
};

interface ProfileState {
  scrollState: 'Up' | 'Down';
  userData: userType | undefined;
  countData: countType | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState = {
  scrollState: 'Down',
  userData: undefined,
  loading: false,
  error: undefined,
} as ProfileState;

export const profileInStorage = createAsyncThunk(
  'users/profileInStorage',
  async ({ userId }: { userId: number }) => {
    const response = await axios.get(`${dev.REACT_APP_SERVER_URI}/api/users/profile/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  },
);

export const profileEditInStorage = createAsyncThunk(
  'users/profileEditInStorage',
  async ({
    userId,
    token,
    profileImage,
    foodStyle,
    foodType,
  }: {
    userId: number;
    token: string;
    profileImage?: string;
    foodStyle?: string;
    foodType?: string;
  }) => {
    const response = await axios.patch(
      `${dev.REACT_APP_SERVER_URI}/api/users/profile/${userId}`,
      { foodType, foodStyle, profileImage },
      {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    return response.data;
  },
);

const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    changeScrollState: (state, action: PayloadAction<'Up' | 'Down'>) => {
      state.scrollState = action.payload;
    },
  },
  extraReducers: {
    [profileInStorage.pending.type]: (state, action) => {
      state.loading = true;
    },
    [profileInStorage.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.data.user;
      state.countData = action.payload.data.counting;
    },
    [profileInStorage.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { changeScrollState } = profileSlice.actions;
export default profileSlice.reducer;
