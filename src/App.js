import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import CidadesPage from "./pages/CidadesPage.jsx";
import HoteisPage from "./pages/HoteisPage.jsx";
import PassagensPage from "./pages/PassagensPage.jsx";
import HospedagemPage from "./pages/HospedagemPage.jsx";
import styled from "styled-components";
import Home from "./style/Home.PNG";
import Cidades from "./style/Cidades.PNG";
import conta from "./style/icone/conta.png";
import hotel from "./style/icone/hotel.png";
import webHouse from "./style/icone/web-house.png";
import cidadeIcone from "./style/icone/cidade.png"
import Banner from "./components/Banner.jsx"

export default function App() {
  const [page, setPage] = useState("true");
  const [lista, setLista] = useState([]);
  const [cidade, setCidade] = useState("");

  return (
    <Page page={page}>
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage/>
            }
          />
          <Route
            path="/cidades"
            element={
              <CidadesPage
                setPage={setPage}
                lista={lista}
                setLista={setLista}
                cidade={cidade}
                setCidade={setCidade}
              />
            }
          />
          <Route
            path="/hosteis"
            element={<HoteisPage lista={lista} cidade={cidade} />}
          />
          <Route
            path="/passagens"
            element={<PassagensPage cidade={cidade} />}
          />
          <Route path="/hospedagem" element={<HospedagemPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer>
        <img src={webHouse} alt="Home" />
        <img src={cidadeIcone} alt="Cidades" />
        <img src={hotel} alt="Hoteis" />
        <img src={conta} alt="Finalizar" />
      </Footer>
    </Page>
  );
}

const Page = styled.div`
  height: 800px;
  background-image: url(${(props) => (props.page==="true" ? Home : Cidades)});
  background-repeat: no-repeat;
  background-size: 100% 102%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const Footer = styled.div`
  display: ${(props) => (props.page ? "none" : "flex")};
  height: 94px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: beige;
  align-items: center;
  justify-content: space-around;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #5dafc6;
  img {
    width: 28px;
    height: 28px;
  }
`;
