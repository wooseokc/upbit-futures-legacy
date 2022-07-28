import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../stores/coinStore';

interface coinState {
  now : string
}



const initialState : coinState = { now : 'BTC' }

const coinSlice = createSlice({
  name : 'coinName',
  initialState : initialState,
  reducers: {
    changeCoin : (state, action: PayloadAction<string>) => {
      state.now = action.payload;
    }
  
  }
})

export const {changeCoin} = coinSlice.actions
export const selectCount = (state: RootState) => state.coin.now
export default coinSlice.reducer