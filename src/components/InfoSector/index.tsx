import React from "react";

import InfoSection from "./style";
import InfoHeader from "./InfoHeader";
import Order from "./InfoOrder";
import Chart from "./Chart";

import { coinApiCall } from "../../reducers/coinSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
// import InfoHeader from "./InfoHeader";

import CoinInfo from "./InfoCoin";
import useInterval from "../../hooks/useInterval";

export default function InfoSector () {

  const dispatch = useAppDispatch()

  useInterval(() => {
    dispatch(coinApiCall())
  }, 500)

  return (
    <>
      <InfoSection>
        <InfoHeader></InfoHeader>
        <CoinInfo></CoinInfo>
        <Chart></Chart>
      </InfoSection>
      <Order></Order>
    </>

  )
}