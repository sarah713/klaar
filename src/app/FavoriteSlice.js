import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favList:[]
}
const FavoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFav: (state, action) => {
            state.favList.push(action.payload)
        }
    }
})
export const { addFav } = FavoriteSlice.actions;
export const selectFavorites = (state) => state.favorites.favList;
export default FavoriteSlice.reducer;