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
import Banner from "./components/Banner.jsx";
import Finalizar from "./pages/FinalizarPage.jsx"

export default function App() {
  const [page, setPage] = useState("true");
  const [dadosPassagem, setDadosPassagem] = useState([]);
  const [dadosHospedagem, setDadosHospedagem] = useState([]);

  return (
    <Page page={page}>
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/cidades"
            element={
              <CidadesPage
                setPage={setPage}
                setDadosPassagem={setDadosPassagem}
              />
            }
          />
          <Route
            path="/hoteis"
            element={<HoteisPage dadosPassagem={dadosPassagem} setDadosHospedagem={setDadosHospedagem} />}
          />
          <Route
            path="/passagens"
            element={<PassagensPage dadosPassagem={dadosPassagem} />}
          />
          <Route
            path="/hospedagem"
            element={<HospedagemPage dadosHospedagem={dadosHospedagem} />}
          ></Route>
          <Route path="/finalizar"
          element={<Finalizar dadosPassagem={dadosPassagem} dadosHospedagem={dadosHospedagem}/>}></Route>
        </Routes>
      </BrowserRouter>
    </Page>
  );
}

const Page = styled.div`
  height: 800px;
  background-image: url(${(props) => (props.page === "true" ? Home : Cidades)});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  max-width: 360px;
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
