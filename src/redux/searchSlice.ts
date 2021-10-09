import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import searchAPI from '../search/constants/mainSearchScreen.json';

export type userType = {
  userId: number;
  name: string;
  nickName: string;
  profileImg: string;
  foodType: string;
  foodStyle: string;
  commentCount: number;
};

export type shopInfoType = {
  isDB: boolean;
  title: string;
  mainImg: string;
  foodCategory: Array<string> | string;
  location: string;
  relatedImg: relatedImgType | [];
  aveRating: number;
  menu: string | null;
  friends: Array<friendType> | null | [];
};

export type relatedImgType = {
  photo_reference: string | null;
  height: number;
  width: number;
  html_attributions: string | Array<string> | [];
};

export type friendType = {
  userId: number;
  name: string;
  profileImg: string;
  rating: number;
  comments: string;
  hashtag: Array<string>;
};

export type mainDataType = {
  user: Array<userType> | undefined;
  shopInfo: Array<shopInfoType> | [];
  status: number;
};

export type dataType = {
  data: mainDataType;
  isUserData: boolean;
  isShopData: boolean;
};

interface SearchState {
  data: dataType | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
} as SearchState;

export const fetchSearchData = createAsyncThunk(
  'GET_SEARCH_DATA',
  async ({ searchInput }: { searchInput: string }) => {
    //   const fetchData = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //   return fetchData.data;
    //   console.log(searchAPI);
    return searchAPI;
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchData.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchData.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchSearchData.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
