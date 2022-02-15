import { userLoginAsync, userLogoutAsync } from './Thunks';
import { IUserState } from './Types';

import { createSlice } from '@reduxjs/toolkit';
import { navigate } from 'gatsby';
import { AuthLocalStorage } from 'shared/constants/LocalStorage';
import { ROUTES } from 'shared/constants/Routes';
import LocalStorageUtil from 'shared/utils/LocalStorage';

const INITIAL_STATE: IUserState = {
  isAuth: LocalStorageUtil.get(AuthLocalStorage.IsAuth) === 'true',
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userLoginAsync.fulfilled, (state, action) => {
      if (!action.payload.error && action.payload.data) {
        const { isAuth } = action.payload.data;
        if (isAuth) {
          state.isAuth = isAuth;
          LocalStorageUtil.set(AuthLocalStorage.IsAuth, isAuth);
          navigate(ROUTES.HOME);
        }
      }
    });

    builder.addCase(userLogoutAsync.fulfilled, (state, action) => {
      if (!action.payload.error) {
        state.isAuth = false;
        LocalStorageUtil.clear();
        navigate(ROUTES.LOGIN);
      }
    });
  },
});

export default userSlice.reducer;
