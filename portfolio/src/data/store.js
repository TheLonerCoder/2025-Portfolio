import {configureStore} from '@reduxjs/toolkit';
import portReducer from './portSlice';


export default configureStore({
  reducer: {
    portfolios: portReducer,
  },
})