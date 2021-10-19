import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ModalSlice {
  alertModal?: boolean;
  selectModal?: boolean;
  boardModal?: boolean;
  photoModal?: boolean;
  profilePhotoModal?: boolean;
  profileUri: string | undefined;
}

const initialState = {
  alertModal: false,
  selectModal: false,
  boardModal: false,
  photoModal: false,
  profilePhotoModal: false,
  profileUri: undefined,
} as ModalSlice;

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
    showPhotoModal: (state, action: PayloadAction<boolean>) => {
      state.photoModal = action.payload;
    },
    showProfilePhotoModal: (state, action: PayloadAction<boolean>) => {
      state.profilePhotoModal = action.payload;
    },
    changeModalProfileUri: (state, action: PayloadAction<string>) => {
      state.profileUri = action.payload;
    },
  },
});

export const {
  showAlertModal,
  showSelectModal,
  showBoardModal,
  showPhotoModal,
  showProfilePhotoModal,
  changeModalProfileUri,
} = modalSlice.actions;
export default modalSlice.reducer;
