import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { InfoBox, CurrentBox, Price, PriceKRW, FromYesterday, ChangedPrice } from "./style";

interface props {
  fluc : any
}

export default function CoinInfo () {
  const priceObject : any = useAppSelector((state) => state.coin.price);

  console.log(priceObject.trade_price)
  // ${priceObject.change_price.toFixed(0)}`

  return (
    <InfoBox>
      {
        priceObject.trade_price > 0 &&
      <CurrentBox>
        <Price fluc={priceObject.change}>{(priceObject.trade_price).toLocaleString()}</Price>
        <PriceKRW fluc={priceObject.change}>KRW</PriceKRW>
        <div style={{fontSize: 13}}>전일대비
        
        <FromYesterday fluc={priceObject.change}>{`${(priceObject.change_rate*100).toFixed(2)}%`}</FromYesterday>
        <ChangedPrice fluc={priceObject.change}>{ Math.floor(priceObject.change_price).toLocaleString()} </ChangedPrice>
        </div>
      </CurrentBox>
      } 
    </InfoBox>
  )
}