import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../../pages/HomePage";
import TradePage from "../../pages/TradePage";

export default function Router(){
    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={  <HomePage />} />
                <Route path="/trade" element={<TradePage />} />
            </Routes>
        </BrowserRouter>
    )
}

