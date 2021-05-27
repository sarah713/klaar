import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './FavoriteSlice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
