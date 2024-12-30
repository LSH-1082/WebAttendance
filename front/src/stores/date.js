import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export const dateSlice = createSlice({
    name: "date",
    initialState: {
        date: dayjs().format('YYYY-MM'),
    },
    reducers: {
        setDate: (state, action) => {
            state.date = action.payload;
        },
    },
});

export const {setDate} = dateSlice.actions;

export default dateSlice.reducer;