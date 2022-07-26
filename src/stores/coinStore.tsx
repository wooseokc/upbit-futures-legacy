import {configureStore} from '@reduxjs/toolkit'
import coinSlice from '../reducers/coinSlice'

const store = configureStore({
  reducer : {
    coin : coinSlice
  }
})

export default store
