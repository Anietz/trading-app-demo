import React, {FunctionComponent, useEffect, useState} from 'react';
import Layout from '../components/Layout';
import CoinListTable from '../components/CoinListTable';
import { useQuery } from "react-query";
import {getAllCryptoAssets} from "../services/CryptoAssetsService"
import {CryptoAssetResponseInterface,CryptoAssetDataResponseInterface} from "../interface/CryptoAssetResponseInterface"
import FormInput, { FormInputType } from '../components/FormInput';
import Button, { ButtonTypes } from '../components/Button';

const HomePage:FunctionComponent = ()=>{
    const [result, setResult] = useState<CryptoAssetDataResponseInterface[]>();
    const [currentPage, setPage] = useState<number>(1);
    const [initialResult, setInitialResult] = useState<CryptoAssetDataResponseInterface[]>();

    const { isLoading, refetch: fetchData } = useQuery<CryptoAssetResponseInterface, Error>(
      "query-crypto-assets",
      async () => {
        return await getAllCryptoAssets(currentPage);
      },
      {
        enabled: false,
        onSuccess: (res) => {
          setPage(currentPage+1);
          if(result){
            setResult([...result, ...res.data]);
             setInitialResult([...result, ...res.data]);
          }else{
            setInitialResult(res.data);
            setResult(res.data);
          }
        },
        onError: (err: any) => {
            console.error(err);
        },
      }
    );


  const searchString = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === ""){
        setResult(initialResult);
    }else{
      let searchResultData = initialResult?.filter((item)=>{
        return item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.symbol.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setResult(searchResultData);
    }
  }

  useEffect(()=>{
      fetchData()
   }, []);




  return (
        <Layout type="block">
           <div style={{marginTop: "13rem",padding: "1rem 12.1rem 5rem"}}>
                <div>
                    <span style={{fontWeight:"100",fontSize: "3rem",color: "orange"}}>Crypto Assets</span>
                    <FormInput placeholder="Search..." type={FormInputType.text} styleContainer={{width:"35%"}} onChange={(e)=>{searchString(e)}}  />
                </div>
                 { isLoading && <div>Loading...</div>}
                 {!isLoading && <CoinListTable data={result}  />}
                 {!isLoading && <Button type={ButtonTypes.primary} isActive={true} onClick={()=>{fetchData()}}>Load More</Button>}
               

           </div>
        </Layout>
  );
}

export default HomePage;
