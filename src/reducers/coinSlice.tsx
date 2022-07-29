import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../stores/coinStore';

interface coinState {
  now : string
  price : object
}



const initialState : coinState = { now : 'BTC', price : {} }

const coinSlice = createSlice({
  name : 'coinName',
  initialState : initialState,
  reducers: {
    changeCoin : (state, action: PayloadAction<string>) => {
      state.now = action.payload;
    }
    ,
    changePrice : (state, action: PayloadAction<object>) => {
      state.price = action.payload;
    }

  
  }
})

export const {changeCoin, changePrice} = coinSlice.actions
export const selectCount = (state: RootState) => state.coin.now
export default coinSlice.reducer