import {createSlice} from '@reduxjs/toolkit'

interface coinState {
  src : string
  korean : string
  english : string
}

const initialState = { korean : 'BTC', src : `https://static.upbit.com/logos/BTC.png`, english: 'BTC/KRW' } as coinState

const coinSlice = createSlice({
  name : 'coinName',
  initialState : initialState,
  reducers: {
    changeCoin (state, action) {
      state.korean = action.payload.data;
      state.src = action.payload.data;
    }
  }
})

export const coinActions = coinSlice.actions
export default coinSlice.reducer