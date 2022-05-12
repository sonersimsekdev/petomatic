import { configureStore } from '@reduxjs/toolkit'
import catsReducer from './CatSlice'
export const store = configureStore({
    reducer: {
        cats: catsReducer,
      },
})