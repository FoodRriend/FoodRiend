import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface UserState {
  foodStyle: string | null;
  foodType: string | null;
}

const initialState = { foodStyle: null, foodType: null } as UserState;

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
  },
});

export const { addFoodStyle, addFoodType } = userSlice.actions;
export default userSlice.reducer;
