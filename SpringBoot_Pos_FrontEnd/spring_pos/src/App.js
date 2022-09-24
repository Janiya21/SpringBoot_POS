import './App.css';
import MainPage2 from "./pages/mainPage2"
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage2 />} />
                <Route path="item" element={<ItemPage />} />
                <Route path="order" element={<OrderPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
