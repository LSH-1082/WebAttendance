import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page';
import dateReducer from './date';
import listDataReducer from './listData';

// store 설정
const store = configureStore({
  reducer: {
    page: pageReducer,
    date: dateReducer, 
    listData: listDataReducer, 
  },
});

export default store;