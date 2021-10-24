import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dev from '../config/env';

export type postType = {
  mainImage: string | undefined;
  foodCategory: string | undefined;
  menu: string | undefined;
  contact: string | undefined;
  title: string | undefined;
  location: string | undefined;
  img: string | undefined;
  rating: number | undefined;
  reviews: string | undefined;
  hashtag: string[] | undefined;
  userId: number | undefined;
};

interface PostState {
  postData: postType | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState = {
  postData: undefined,
  loading: false,
  error: undefined,
} as PostState;

export const postWriteInStorage = createAsyncThunk(
  'users/postWriteInStorage',
  async ({
    accessToken,
    mainImage,
    foodCategory,
    menu,
    contact,
    title,
    location,
    img,
    rating,
    reviews,
    hashtag,
    userId,
  }: {
    accessToken: string;
    mainImage?: string;
    foodCategory?: string;
    menu?: string;
    contact?: string;
    title: string;
    location?: string;
    img: string;
    rating: number;
    reviews: string;
    hashtag?: string[];
    userId: number;
  }) => {
    const response = await axios.post(
      `${dev.REACT_APP_SERVER_URI}/api/board/write/${userId}`,
      {
        accessToken,
        mainImage,
        foodCategory,
        menu,
        contact,
        title,
        location,
        img,
        rating,
        reviews,
        hashtag,
        userId,
      },
      {
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        withCredentials: true,
      },
    );
    console.log(response.data, '???????');
    return response?.data;
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [postWriteInStorage.pending.type]: (state, action) => {
      state.loading = true;
    },
    [postWriteInStorage.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [postWriteInStorage.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
