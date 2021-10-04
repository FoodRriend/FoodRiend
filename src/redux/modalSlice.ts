import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface UserState {
  alertModal?: boolean;
  selectModal?: boolean;
}

const initialState = { alertModal: false, selectModal: false } as UserState;

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showAlertModal: (state, action: PayloadAction<boolean>) => {
      state.alertModal = action.payload;
    },
    showSelectModal: (state, action: PayloadAction<boolean>) => {
      state.selectModal = action.payload;
    },
  },
});

export const { showAlertModal, showSelectModal } = modalSlice.actions;
export default modalSlice.reducer;
