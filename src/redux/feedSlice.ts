import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import feedAPI from '../shared/hooks/feedData.json';

export type relatedImgType = {
  img: string;
  created_at: string;
};

export type friendType = {
  userId: number;
  name: string;
  nickname: string;
  foodType: string;
  foodStyle: string;
  hashtag: Array<string> | [];
  profileImg: string;
  rating: number;
  relatedImg: Array<relatedImgType>;
  comments: string;
};

export type userType = {
  title: string;
  relatedImg: Array<relatedImgType>;
  foodCategory: string;
  location: string;
  userId: number;
  name: string;
  nickname: string;
  foodType: string;
  foodStyle: string;
  rating: number;
  created_at: string;
  hashtag: Array<string> | [];
  comments: string;
  profileImg: string;
  friends: Array<friendType> | [];
};

export type mainDataType = {
  users: Array<userType> | undefined;
  status: number;
  isData: boolean;
};

export type dataDepth = {
  data: mainDataType | undefined;
};

interface FeedState {
  data: dataDepth | undefined;
  loading: boolean;
  error: string | undefined;
}

export const fetchFeedData = createAsyncThunk('GET_FEED_DATA', async () => {
  return feedAPI;
});

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
} as FeedState;

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFeedData.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchFeedData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchFeedData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default feedSlice.reducer;
