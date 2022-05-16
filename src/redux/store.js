import { configureStore } from '@reduxjs/toolkit'
import catsReducer from './CatSlice'
import dogsReducer from './DogSlice'
import fishiesReducer from './FishSlice'
import birdsReducer from './BirdSlice'
export const store = configureStore({
    reducer: {
        cats: catsReducer,
        dogs: dogsReducer,
        fishies: fishiesReducer,
        birds: birdsReducer,
      },
})