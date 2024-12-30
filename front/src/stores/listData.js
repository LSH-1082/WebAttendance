import { createSlice } from '@reduxjs/toolkit';

export const listDataSlice = createSlice({
    name: "listData",
    initialState: {
        listData: [],
    },
    reducers: {
        setListData: (state, action) => {
            state.listData = action.payload;
        },
    },
});

export const {setListData} = listDataSlice.actions;

export default listDataSlice.reducer;