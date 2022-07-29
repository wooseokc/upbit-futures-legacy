import React from "react";
import { useAppSelector } from "../../../hooks/hooks";

export default function CoinInfo () {
  const priceObject : any = useAppSelector((state) => state.coin.price);

  console.log(priceObject.trade_price)

    

  return (
    <div style={{width : 800, height : 800, background: 'blue', zIndex: 99}}>dfssfdssd</div>
  )
}