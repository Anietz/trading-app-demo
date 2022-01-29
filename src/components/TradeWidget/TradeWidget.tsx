import React,{FunctionComponent, useEffect, useState} from "react";
import FormInput,{FormInputType} from "../FormInput";
import "./TradeWidget.css";
import Button,{ButtonTypes} from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from "react-query";
import {getExchangeRate} from "../../services/ExchangeRateService"
import { ExchangeRateResponseInterface } from "../../interface/CryptoExchangeRateResponseInterface";
import {useSelector} from 'react-redux';
import {RootState} from "../../store/reducers";


const TradeWidget: FunctionComponent = () => {
    const loginStatus = useSelector((state:RootState)=>state.login.isLogin);
    const [normalDisplay,setNormalDisplay] = useState<boolean>(true);
    const [cryptoAmount,setCryptoAmount] = useState<any>("");
    const [fiatAmount,setFiatAmount] = useState<any>("");
    const FormInputStyleContainer = {borderRadius: "2rem",padding:"1rem 2rem",marginBottom:"1.1rem"}
    const ButtonStyle = {padding: "2rem 1rem",width:"100%",borderRadius:"2rem",background:"rgb(52 50 50)",color:"#fff"}
    const FormInputStyle = {fontSize:"4rem"};
    
    const [exchangeRate,setExchangeRate] = useState<number>();

     const { isLoading, refetch: fetchExchangeRate } = useQuery<ExchangeRateResponseInterface, Error>(
      "query-crypto-assets",
      async () => {
        return await getExchangeRate();
      },
      {
        enabled: false,
        onSuccess: (res) => {
            console.log(res);
            setExchangeRate(Number(res.rates.BTC));
        },
        onError: (err: any) => {
            console.error(err);
        },
      }
    );


    useEffect(()=>{
      fetchExchangeRate()
   }, []);


    const setFiatAmountHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;
        
            setFiatAmount(value);
             if(exchangeRate && value){
                const cryptoAmount = (Number(value)*exchangeRate).toFixed(8);
                setCryptoAmount(cryptoAmount);
            }else{
                setCryptoAmount("")
            }
        
    }

    const setCryptoAmountHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{

        const value = event.target.value;
            if(exchangeRate && value){
                const fiatAmount = (Number(value)/exchangeRate).toFixed(2);
                setFiatAmount(fiatAmount);
            }else{
               setFiatAmount("") 
            }
            setCryptoAmount(value);
        
    }


    return (
        <>
         <div className="trade-container">
             <div className="trade-header">
                    <span>Swap</span>
            </div>

           { normalDisplay && 
              <>  
                <div className="trade-input-forms">
                    <select>
                            <option>BTC</option>
                    </select>
                    <FormInput value={cryptoAmount} style={FormInputStyle} styleContainer={FormInputStyleContainer} type={FormInputType.text}   
                    onChange={e=>{setCryptoAmountHandler(e)}} placeholder="0.0" /> 
                </div>

                <div className="trade-swap-icon" onClick={()=>{setNormalDisplay(false)}}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>


                <div className="trade-input-forms">
                    <span>USD</span>
                    <FormInput value={fiatAmount} style={FormInputStyle} styleContainer={FormInputStyleContainer} type={FormInputType.text} min={1} max={80} pattern="^[0-9]*[.,]?[0-9]*$"  
                    onChange={e=>{ setFiatAmountHandler(e) } } placeholder="0.0" /> 
                </div>
             </>
             }




              { !normalDisplay && 
              <>  
                <div className="trade-input-forms">
                    <span>USD</span>
                    <FormInput value={fiatAmount} style={FormInputStyle} styleContainer={FormInputStyleContainer} type={FormInputType.text} min={1} max={80} pattern="^[0-9]*[.,]?[0-9]*$"  
                    onChange={e=>{ setFiatAmountHandler(e) } } placeholder="0.0" /> 
                </div>
                <div className="trade-swap-icon" onClick={()=>{setNormalDisplay(true)}}>
                    <FontAwesomeIcon  icon={faArrowDown} />
                </div>
                 <div className="trade-input-forms">
                    <select>
                            <option>BTC</option>
                    </select>
                    <FormInput value={cryptoAmount} style={FormInputStyle} styleContainer={FormInputStyleContainer} type={FormInputType.text} min={1} max={80} pattern="^[0-9]*[.,]?[0-9]*$"  
                    onChange={e=>{setCryptoAmountHandler(e)}} placeholder="0.0" /> 
                </div>
             </>
             }


             <div className="text-center trade-button-container">
                {loginStatus && <Button style={ButtonStyle} onClick={()=>{alert("Swapping now")}} type={ButtonTypes.primaryOutline} >
                    Swap
                </Button> }
                {!loginStatus && <Button style={ButtonStyle} onClick={()=>{alert("Login to continue swapping")}} type={ButtonTypes.primaryOutline} >
                    Login to continue
                </Button>}
             </div>
           </div>
        </>
    )
}

export default TradeWidget;