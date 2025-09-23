import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
//import leadsSlice from '../features/leads/leadSlice'

const combinedReducer = {
  header : headerSlice
 // lead : leadsSlice
}

export default configureStore({
    reducer: combinedReducer
})