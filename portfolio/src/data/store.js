import {configureStore} from '@reduxjs/toolkit';
import portReducer from './portSlice';
import projectReducer from './projectSlice';

export default configureStore({
  reducer: {
    portfolios: portReducer,
    project: projectReducer,
  },
})