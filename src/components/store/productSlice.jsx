import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsId: [],
    products: [],
  },
  reducers: {
    setProductsId: (state, action) => {
      state.productsId = action.payload
    },
    setProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { setProductsId, setProducts } = productsSlice.actions
export const productsReducer = productsSlice.reducer
