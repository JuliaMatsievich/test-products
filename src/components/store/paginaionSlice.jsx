import { createSlice } from '@reduxjs/toolkit'
import { getArrayOfNumbers } from '../../helpers/getArrayNumbers'

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pages: [1],
    currentPage: 1,
  },
  reducers: {
    // setPages(state, action) {
    //   const { offset, limit } = action.payload

    //   if (totalCount > 1000) {
    //     state.pages = getArrayOfNumbers(34)
    //   } else {
    //     state.pages = getArrayOfNumbers(Math.ceil(totalCount / PER_PAGE))
    //   }
    // },
    setCurrentPage(state, action) {
      state.currentPage = action.payload.currentPage
    },
  },
})

export const { setPages, setCurrentPage } = paginationSlice.actions
export const paginationReducer = paginationSlice.reducer
