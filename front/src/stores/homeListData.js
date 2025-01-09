import { createSlice } from '@reduxjs/toolkit';

export const homeListDataSlice = createSlice({
    name: "homeListData",
    initialState: {
        homeListData: [],
    },
    reducers: {
        setHomeListData: (state, action) => {
            state.homeListData = action.payload;
        },
    },
});

export const {setHomeListData} = homeListDataSlice.actions;

export default homeListDataSlice.reducer;