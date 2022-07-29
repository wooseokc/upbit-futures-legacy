import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import useInterval from "../../../hooks/useInterval";
import { changePrice } from "../../../reducers/coinSlice";
import { OrderBox, TypeBox ,CategoryInfo, DefaultRadio, Range, EnterIndex ,RangeIndex, RangeTimes, InputBox, ShortButton, LongButton } from "./style";


export default function Order () {
  const [budget, setBudget] = useState(10000000);
  const [leverage, setLeverage] = useState(5);
  const [coinPrice, setCoinPrice] = useState<number | undefined>(undefined);
  const [inputValue, setInputValue] = useState('0');
  const [orderPrice, setOrderPrice] = useState(0);
  const [enterPrice, setEnterPrice] = useState<number | undefined>(undefined)
  const [fluctuation, setFluctuation] = useState(0);
  const [condition, setCondition] = useState('ready');
  const [resultPrice, setResultPrice] = useState(0);
  const [lastResult, setLastResult] = useState<number | undefined>(undefined)

  const dispatch = useAppDispatch()
  const coin = useAppSelector((state) => state.coin.now);
  
  async function apicall() {
    await axios.get(`https://api.upbit.com/v1/ticker?markets=KRW-${coin}`).then(res => {
      setCoinPrice(res.data[0].trade_price)
      dispatch(changePrice(res.data[0]))
    })
  } 


  useInterval(apicall, 1000)

  useEffect(()=> {
    if(enterPrice && coinPrice) {
      
      if (fluctuation*leverage <-90) {
        setCondition('ready');
        setLastResult(-orderPrice)
        setBudget(money => money-orderPrice)
        setEnterPrice(undefined)
      }


      if (condition === 'Long') {
        setFluctuation(((coinPrice-enterPrice)/enterPrice*100))
      } else {
        setFluctuation(((enterPrice-coinPrice)/enterPrice*100))
      }
      setResultPrice(Math.floor(orderPrice + (orderPrice*fluctuation*leverage/100)))
    }
  }, [enterPrice, coinPrice, condition, orderPrice, fluctuation, leverage])

  const enterBet = (e: React.MouseEvent<HTMLButtonElement>) => {
    let enterNumber : number = +(inputValue.replaceAll(',',''));
    if (enterNumber > 0) {
      setBudget(money => money - enterNumber)
      setEnterPrice(coinPrice)
  
      if(e.currentTarget.innerHTML === 'Long/상승') {
        setCondition('Long');
      } else {
        setCondition('Short');
      }
  
      let tmp = inputValue.replaceAll(',','');
      console.log(`tmp > ${tmp}`)
      setOrderPrice(+tmp);
      console.log(`enterPrice => ${enterPrice}`)
    } else {
      return
    }
  }

  const exitBet = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCondition('ready')
    setBudget(money => money+resultPrice)
    setEnterPrice(undefined)
    if (orderPrice) {
      setLastResult(resultPrice-orderPrice)
    }

  }

  const changeLever = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeverage(Number(e.target.value))
  }

  const changeLocaleScale = (e: React.ChangeEvent<HTMLInputElement>) => {
    let tmp = Number(e.target.value.replaceAll(',',''));
    console.log(tmp)
    if (isNaN(tmp)) setInputValue('0')
    else if (tmp >budget)  setInputValue('한도 초과')
    else {
      setInputValue(tmp.toLocaleString());
    }
  }


  return (
    <OrderBox>
      <TypeBox>
        <CategoryInfo>주문구분</CategoryInfo>
        <DefaultRadio type='radio' name="a" disabled={true}/>지정가
        <DefaultRadio type='radio' name="a" defaultChecked={true}/>시장가
        <DefaultRadio type='radio' name="a" disabled={true} />예약-지정가
      </TypeBox>
      <TypeBox>
        <CategoryInfo>주문가능</CategoryInfo>
        <div style={{position : 'absolute', right : 10}}> {budget.toLocaleString()} KRW</div>
      </TypeBox>
      <TypeBox>
        <CategoryInfo>레버리지</CategoryInfo>
        <Range onChange={changeLever} type='range' min={5} max={500} step={5}></Range>
        <RangeIndex>{leverage}</RangeIndex>
        <RangeTimes>X</RangeTimes>
      </TypeBox>
      <TypeBox >
        <CategoryInfo>주문총액</CategoryInfo>
        <InputBox type={"text"} value={inputValue} onChange={changeLocaleScale}></InputBox>
      </TypeBox>
      <TypeBox style={{height : 80}}>
        {condition === 'ready' ? <ShortButton onClick={enterBet}>Short/하락</ShortButton> : <ShortButton onClick={exitBet} style={{background : 'gray'}}>중지</ShortButton>}
        {condition === 'ready' ? <LongButton onClick={enterBet}>Long/상승</LongButton> : <LongButton onClick={exitBet}  style={{background : 'gray'}}>중지</LongButton>}
        
      </TypeBox>
      <TypeBox>
        <CategoryInfo>주문금액</CategoryInfo>
        {enterPrice && <EnterIndex>{orderPrice.toLocaleString()}</EnterIndex>}
      </TypeBox>
      <TypeBox>
        <CategoryInfo>진입가격</CategoryInfo>
        {enterPrice && <EnterIndex>{enterPrice.toLocaleString()}</EnterIndex>}
      </TypeBox>
      <TypeBox>
        <CategoryInfo>변동폭</CategoryInfo>
        {enterPrice && <EnterIndex style={fluctuation >0 ? {color : 'red'} : {color : 'blue'} }>{
        coinPrice && `${(fluctuation).toFixed(2)}%`
        }</EnterIndex>}
      </TypeBox>
      <TypeBox>
        <CategoryInfo>수익률</CategoryInfo>
        {enterPrice && <EnterIndex style={fluctuation > 0 ? {color : 'red'} : {color : 'blue'}}>{`${(fluctuation*leverage).toFixed(2)}%`}</EnterIndex>}
      </TypeBox>
      <TypeBox>
        <CategoryInfo>정산금액</CategoryInfo>
        {enterPrice && <EnterIndex style={fluctuation > 0 ? {color : 'red'} : {color : 'blue'}}>{resultPrice.toLocaleString()}</EnterIndex>}
      </TypeBox>
      <TypeBox>
        <CategoryInfo>직전결과</CategoryInfo>
        {lastResult && <EnterIndex style={lastResult > 0 ? {color : 'red'} : {color : 'blue'}}>{lastResult.toLocaleString()}</EnterIndex>}
      </TypeBox>
    </OrderBox>
  )
}