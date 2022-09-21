import './App.css';
import MainPage from "./pages/mainPage";
import MainPage2 from "./pages/mainPage2"
import Navbar from "./pages/navbar";
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage2 />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
