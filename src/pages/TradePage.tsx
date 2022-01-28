import React,{FunctionComponent} from 'react';
import Layout from '../components/Layout';
import TradeWidget from '../components/TradeWidget';


const  TradePage:FunctionComponent = ()=>{
  return (
        <Layout>
          <TradeWidget />
        </Layout>
  );
}

export default TradePage;
