import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './date';
import listDataReducer from './listData';

// store 설정
const store = configureStore({
  reducer: {
    date: dateReducer, 
    listData: listDataReducer, 
  },
});

export default store;