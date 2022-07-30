import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import useInterval from "../../../hooks/useInterval";
import { Candle, CandleBox, CandleContainer, ChartContainer, Line, MinuteSelect, OptionContainer, TopBar } from "./style";

interface data {
  candle_acc_trade_price : number
  candle_acc_trade_volume : number
  candle_date_time_kst : string
  candle_date_time_utc : string
  high_price : number
  low_price : number
  opening_price : number
  timestamp : number
  trade_price : number
  unit : number
}

export default function Chart () {
  const [unit, setUnit] = useState('1');
  const [chartArr, setChartArr] = useState<data[] | undefined>();
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [total, setTotal] = useState<number | undefined>();
  const [nowOpen, setNowOpen] = useState<number | undefined>();
  const [coinPrice, setCoinPrice] = useState<number | undefined>();

  const coin = useAppSelector(state => state.coin.now);
  const price : any = useAppSelector(state => state.coin.price)
  
  async function apicall() {
    await axios.get(`https://api.upbit.com/v1/candles/minutes/${unit}?market=KRW-${coin}&count=100`).then(res => {
      setChartArr(res.data.reverse());
    });
  } 

  useEffect(() => {
    if (chartArr) {
      let t = 0;
      let b = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < chartArr.length; i ++) {
        if (chartArr[i].low_price < b) {
          b = chartArr[i].low_price
        }
        if (chartArr[i].high_price > t) {
          t = chartArr[i].high_price
        }
      }
      setBottom(b)
      setTop(t)
      setTotal(t-b)
      setNowOpen(price.trade_price)
    }
  }, [chartArr])

  useEffect(()=> {
    apicall()
  }, [unit]);

  useEffect(()=> {
    setCoinPrice(price.trade_price)
  }, [price.trade_price]);

  const enterBet = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setUnit(e.currentTarget.value)
    console.log(bottom)
    console.log(top)
  }

  useInterval(apicall, 30000)
  
  let candleItem : any;
  if (total && chartArr) {
    candleItem = chartArr.map((item) => {

         return (
          <CandleBox key={item.timestamp}>
            <Candle height={Math.floor(Math.abs(item.trade_price-item.opening_price)/total*310)} position={(item.trade_price > item.opening_price ? item.opening_price - bottom : item.trade_price -bottom)/total*310} color={item.opening_price - item.trade_price}></Candle>
            <Line  height={Math.abs(item.high_price-item.low_price)/total*310} position={(item.low_price -bottom)/total*310}></Line>
          </CandleBox>
      )
    })
  } 





  return (
    <> 
    { chartArr &&
      <>
        <TopBar>
          <OptionContainer>
            <MinuteSelect onClick={enterBet} type={'radio'} name={'minute'} id={'1'} value={1} defaultChecked></MinuteSelect>
            <label htmlFor="1">1분</label>
            <MinuteSelect onClick={enterBet} type={'radio'} name={'minute'} id={'3'} value={3}></MinuteSelect>
            <label htmlFor="3">3분</label>
            <MinuteSelect onClick={enterBet} type={'radio'} name={'minute'} id={'5'} value={5}></MinuteSelect>
            <label htmlFor="5">5분</label>
          </OptionContainer>
        </TopBar>
        <ChartContainer>
          <CandleContainer>
              {candleItem}
              {
                (nowOpen && total && coinPrice) &&
                <CandleBox>
                  <Candle height={Math.floor(Math.abs(nowOpen-coinPrice)/total*310)} position={(nowOpen > coinPrice ? coinPrice - bottom : nowOpen -bottom)/total*310} color={nowOpen - coinPrice} ></Candle>
                  <Line></Line>
                </CandleBox>
              }
          </CandleContainer>
        </ChartContainer>
      </>
    }  
    </>
  )
  
}