import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dev from '../config/env';

interface UserState {
  foodStyle: string | undefined;
  foodEditStyle: string | undefined;
  foodEditStateStyle: boolean;
  foodType: string | undefined;
  foodEditType: string | undefined;
  foodEditStateType: boolean;
  nickname: string | undefined;
  nicknameCheck: boolean;
  nicknameFalseCheck: boolean;
  kakaoId: number | undefined;
  loginType: string | undefined;
  accessToken: any;
  name: string | undefined;
  isNewMember: boolean;
  userId: number | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState = {
  foodStyle: undefined,
  foodEditStyle: undefined,
  foodEditStateStyle: false,
  foodType: undefined,
  foodEditType: undefined,
  foodEditStateType: false,
  nickname: undefined,
  nicknameCheck: false,
  nicknameFalseCheck: false,
  kakaoId: undefined,
  loginType: undefined,
  accessToken: undefined,
  name: undefined,
  isNewMember: true,
  userId: undefined,
  loading: false,
  error: undefined,
} as UserState;

export const kakaoLoginInStorage = createAsyncThunk(
  'users/kakaoLoginInStorage',
  async ({ kakaoId, loginType }: { kakaoId: number; loginType: string }) => {
    const response = await axios.post(
      `${dev.REACT_APP_SERVER_URI}/api/auth/kakao`,
      { kakaoId, loginType },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      },
    );
    console.log(response.data, 'data?');
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
    accessToken: string | undefined;
    name?: string | undefined;
    nickname?: string | undefined;
    foodType?: string | undefined;
    foodStyle?: string | undefined;
  }) => {
    const response = await axios.post(
      `${dev.REACT_APP_SERVER_URI}/api/auth/createInfo`,
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
    addFoodEditStyle: (state, action: PayloadAction<string>) => {
      state.foodEditStyle = action.payload;
    },
    addfoodEditStateStyle: (state, action: PayloadAction<boolean>) => {
      state.foodEditStateStyle = action.payload;
    },
    addFoodType: (state, action: PayloadAction<string>) => {
      state.foodType = action.payload;
    },
    addFoodEditType: (state, action: PayloadAction<string>) => {
      state.foodEditType = action.payload;
    },
    addFoodEditStateType: (state, action: PayloadAction<boolean>) => {
      state.foodEditStateType = action.payload;
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
    accessTokenUpdate: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    userIdUpdate: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
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
      state.userId = action.payload[1].userId;
    },
    [kakaoLoginInStorage.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [kakaoSignupInStorage.pending.type]: (state, action) => {
      state.loading = true;
      state.nicknameCheck = false;
      state.nicknameFalseCheck = false;
    },
    [kakaoSignupInStorage.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.nicknameCheck = true;
      state.nicknameFalseCheck = false;
    },
    [kakaoSignupInStorage.rejected.type]: (state, action) => {
      state.loading = false;
      state.nicknameCheck = false;
      state.nicknameFalseCheck = true;
      state.error = action.payload;
    },
  },
});

export const {
  addFoodStyle,
  addFoodEditStyle,
  addfoodEditStateStyle,
  addFoodType,
  addFoodEditType,
  addFoodEditStateType,
  addNickname,
  loginTypeUpdate,
  kakaoNameUpdate,
  kakaoIdUpdate,
  accessTokenUpdate,
  userIdUpdate,
} = userSlice.actions;
export default userSlice.reducer;
