//"https://min-api.cryptocompare.com/data/price?ran=" . $random_string . "&fsym=" . $fromCurrency . "&tsyms=" . $toCurrency,
import {CryptoAssetResponseInterface} from '../interface/CryptoAssetResponseInterface';
import axios from "axios";

const apiClient = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

export const getAllCryptoAssets = async (page:number=1) => {
  const url = "https://data.messari.io/api/v1/assets?fields=id,symbol,name,slug,metrics&limit=10&page="+page;
  const response = await apiClient.get<CryptoAssetResponseInterface>(url);
  return response.data;
}