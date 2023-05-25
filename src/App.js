import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CidadesPage from "./pages/CidadesPage.jsx";
import HoteisPage from "./pages/HoteisPage.jsx";
import PassagensPage from "./pages/PassagensPage.jsx";
import HotelPage from "./pages/HotelPage.jsx";
import Logo from "./style/logo.png";
import Home from "./style/Home.PNG";
import Cidades from "./style/Cidades.PNG";
import styled from "styled-components";

export default function App() {
  return (
    <Page>
      <Banner>
        <img src={Logo} alt="" />
      </Banner>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cidades" element={<CidadesPage />} />
          <Route path="/:id_cidade/hosteis" element={<HoteisPage />} />
          <Route path="/passagens" element={<PassagensPage />} />
          <Route path="/" element={<HotelPage />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer>
        <img src="iconeHome" alt="Home" />
        <img src="iconePassagens" alt="Passagens" />
        <img src="iconePesquisar" alt="Pesquisar" />
        <img src="iconeHoteis" alt="Hoteis" />
        <img src="iconeFinalizar" alt="Finalizar"/>
      </Footer>
    </Page>
  );
}

const Page = styled.div`
  height: 800px;
  background-image: url(${Cidades});
  background-image: url(${Cidades});
  background-repeat: no-repeat;
  background-size: 100% 102%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-left-radius: 32px 32px;
  border-bottom-right-radius: 32px 32px;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  img {
    height: 79px;
    width: 89px;
  }
`;

const Footer = styled.div`
  height: 94px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: black;
`;
