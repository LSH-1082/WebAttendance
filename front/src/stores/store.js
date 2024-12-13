import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page';

// store 설정
const store = configureStore({
  reducer: {
    page: pageReducer
  },
});

export default store;