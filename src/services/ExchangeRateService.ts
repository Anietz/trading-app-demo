//",
import {ExchangeRateResponseInterface} from '../interface/CryptoExchangeRateResponseInterface';
import axios from "axios";

const apiClient = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

export const getExchangeRate = async () => {
  const url = "https://api.exchangerate.host/latest?base=USD";
  const response = await apiClient.get<ExchangeRateResponseInterface>(url);
  return response.data;
}