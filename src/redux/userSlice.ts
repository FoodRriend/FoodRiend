import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  foodStyle: string | undefined;
  foodType: string | undefined;
  nickname: string | undefined;
  nicknameCheck: boolean;
  kakaoId: number | undefined;
  loginType: string | undefined;
  accessToken: Array<string> | undefined;
  name: string | undefined;
  isNewMember: boolean;
  isLogin: boolean;
  loading: boolean;
  error: string | undefined;
}

const initialState = {
  foodStyle: undefined,
  foodType: undefined,
  nickname: undefined,
  nicknameCheck: false,
  kakaoId: undefined,
  loginType: undefined,
  accessToken: undefined,
  name: undefined,
  isNewMember: true,
  isLogin: false,
  loading: false,
  error: undefined,
} as UserState;

export const kakaoLoginInStorage = createAsyncThunk(
  'users/kakaoLoginInStorage',
  async ({ kakaoId, loginType }: { kakaoId: number; loginType: string }) => {
    const response = await axios.post(
      `https://fat-impala-57.loca.lt/api/auth/kakao`,
      { kakaoId, loginType },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      },
    );
    return [
      response.headers['set-cookie'][0].split(' ')[0].split('=')[1].slice(0, -1),
      response.data,
    ];
  },
);

export const kakaoSignupInStorage = createAsyncThunk(
  'users/kakaoSignupInStorage',
  async ({
    accessToken,
    name,
    nickname,
    foodType,
    foodStyle,
  }: {
    accessToken: Array<string> | undefined;
    name?: string | undefined;
    nickname: string | undefined;
    foodType?: string | undefined;
    foodStyle?: string | undefined;
  }) => {
    const response = await axios.post(
      `https://fat-impala-57.loca.lt/api/auth/createInfo`,
      { name, nickname, foodType, foodStyle },
      {
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        withCredentials: true,
      },
    );
    return response?.data;
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addFoodStyle: (state, action: PayloadAction<string>) => {
      state.foodStyle = action.payload;
    },
    addFoodType: (state, action: PayloadAction<string>) => {
      state.foodType = action.payload;
    },
    addNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    loginTypeUpdate: (state, action: PayloadAction<string>) => {
      state.loginType = action.payload;
    },
    kakaoNameUpdate: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    kakaoIdUpdate: (state, action: PayloadAction<number>) => {
      state.kakaoId = action.payload;
    },
    isLoginState: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: {
    [kakaoLoginInStorage.pending.type]: (state, action) => {
      state.loading = true;
    },
    [kakaoLoginInStorage.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.accessToken = action.payload[0];
      state.isNewMember = action.payload[1].isNewMember;
    },
    [kakaoLoginInStorage.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [kakaoSignupInStorage.pending.type]: (state, action) => {
      state.loading = true;
      state.nicknameCheck = false;
    },
    [kakaoSignupInStorage.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.nicknameCheck = true;
    },
    [kakaoSignupInStorage.rejected.type]: (state, action) => {
      state.loading = false;
      state.nicknameCheck = false;
      state.error = action.payload;
    },
  },
});

export const {
  addFoodStyle,
  addFoodType,
  addNickname,
  loginTypeUpdate,
  kakaoNameUpdate,
  kakaoIdUpdate,
  isLoginState,
} = userSlice.actions;
export default userSlice.reducer;
