import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './date';
import pageReducer from './page';
import peopleDataReducer from './peopleData';
import homeListDataReducer from './homeListData';
import peopleListDataReducer from './peopleListData';

// store 설정
const store = configureStore({
  reducer: {
    date: dateReducer, 
    page: pageReducer, 
    peopleData: peopleDataReducer, 
    peopleListData: peopleListDataReducer, 
    homeListData: homeListDataReducer, 
  },
});

export default store;