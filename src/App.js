import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import CidadesPage from "./pages/CidadesPage.jsx"
import HoteisPage from "./pages/HoteisPage.jsx"
import PassagensPage from "./pages/PassagensPage.jsx"
import HotelPage from "./pages/HotelPage.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cidades" element={<CidadesPage/>}/>
        <Route path="/:id_cidade/hosteis" element={<HoteisPage/>}/>
        <Route path="/passagens" element={<PassagensPage/>}/>
        <Route path="/" element={<HotelPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
