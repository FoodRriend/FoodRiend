import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ModalSlice {
  alertModal?: boolean;
  selectModal?: boolean;
  boardModal?: boolean;
}

const initialState = { alertModal: false, selectModal: false, boardModal: false } as ModalSlice;

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
    showBoardModal: (state, action: PayloadAction<boolean>) => {
      state.boardModal = action.payload;
    },
  },
});

export const { showAlertModal, showSelectModal, showBoardModal } = modalSlice.actions;
export default modalSlice.reducer;
