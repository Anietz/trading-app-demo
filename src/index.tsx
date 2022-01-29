import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Router from './components/Router/Router';
import { QueryClient, QueryClientProvider } from "react-query";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store,{persistor} from "../src/store/index";

const queryClient = new QueryClient();



//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
           <Router />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
