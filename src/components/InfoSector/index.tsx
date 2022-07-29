import React from "react";
import { Provider } from "react-redux";

import InfoSection from "./style";
import InfoHeader from "../InfoHeader";
import Order from "./InfoOrder";
// import InfoHeader from "./InfoHeader";

import store from "../../stores/coinStore";
import CoinInfo from "./InfoCoin";

export default function InfoSector () {

  return (
    <Provider store={store}>
      <InfoSection>
        <InfoHeader></InfoHeader>
        <CoinInfo></CoinInfo>
      </InfoSection>
      <Order></Order>
    </Provider>
  )
}