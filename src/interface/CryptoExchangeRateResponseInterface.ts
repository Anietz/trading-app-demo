export interface CoinType{
    BTC:string
}

export interface ExchangeRateResponseInterface {
    rates: CoinType;
    success: boolean
}