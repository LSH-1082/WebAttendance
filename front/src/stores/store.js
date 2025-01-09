import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './date';
import pageReducer from './page';
import homeListDataReducer from './homeListData';
import peopleListDataReducer from './peopleListData';

// store 설정
const store = configureStore({
  reducer: {
    date: dateReducer, 
    page: pageReducer, 
    peopleListData: peopleListDataReducer, 
    homeListData: homeListDataReducer, 
  },
});

export default store;