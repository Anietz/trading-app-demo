import React,{FunctionComponent} from  "react";
import './CoinListTable.css';
import {CoinListTableProps} from './types';
import ButtonPopup from '../ButtonPopup';

const Table:FunctionComponent<CoinListTableProps> = ({data}) => {
    //Format a number to currency
    const formatNumber = (num:number) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    return (
        <table className="styled-table">
            <thead>
                <tr>
                <th>Coin Name</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {  data?.map((item,index)=>

                     <tr>
                        <td> {item.name} ({item.symbol}) </td>
                        <td>${formatNumber(parseFloat(item.metrics.market_data.price_usd.toFixed(2)))}</td>
                        <td>
                            <ButtonPopup>
                                Trade
                            </ButtonPopup>

                        </td>
                    </tr>

              ) }
            </tbody>
    </table>
  )
}


export default Table;