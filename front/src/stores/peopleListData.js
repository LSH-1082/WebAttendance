import { createSlice } from '@reduxjs/toolkit';

export const peopleListDataSlice = createSlice({
    name: "peopleListData",
    initialState: {
        peopleListData: [],
    },
    reducers: {
        setPeopleListData: (state, action) => {
            state.peopleListData = action.payload;
        },
    },
});

export const {setPeopleListData} = peopleListDataSlice.actions;

export default peopleListDataSlice.reducer;