import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './productSlice'
import { paginationReducer } from './paginaionSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    pagination: paginationReducer,
  },
})
