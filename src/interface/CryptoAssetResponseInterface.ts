


export interface CryptoMetricsInfo{
    price_usd: number;
    price_btc: number;
    price_eth: number;
}

export interface CryptoAssetDataResponseInterface{
    symbol:string;
    name:string;
    slug:string;
    metrics:  {
        market_data: CryptoMetricsInfo
    }
}

export interface CryptoAssetStatusResponseInterface{
   elapsed: number,
   timestamp:string
}


export interface CryptoAssetResponseInterface {
    data: CryptoAssetDataResponseInterface[];
    status: CryptoAssetStatusResponseInterface
}