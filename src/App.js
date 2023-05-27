import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import CidadesPage from "./pages/CidadesPage.jsx";
import HoteisPage from "./pages/HoteisPage.jsx";
import PassagensPage from "./pages/PassagensPage.jsx";
import HospedagemPage from "./pages/HospedagemPage.jsx";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";
import Logo from "./style/logo.png";
import Home from "./style/Home.PNG";
import Cidades from "./style/Cidades.PNG";


export default function App() {
  const [ page, setPage ] = useState(true)

  return (
    <Page page={ page }>
      <Banner>
        <img src={Logo} alt="" />
      </Banner>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage page={ page } setPage={ setPage } />} />
          <Route path="/cidades" element={<CidadesPage setPage={ setPage }/>} />
          <Route path="/hosteis" element={<HoteisPage />} />
          <Route path="/passagens" element={<PassagensPage />} />
          <Route path="/hospedagem" element={<HospedagemPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer page={ page }/>
    </Page>
  );
}

const Page = styled.div`
  height: 800px;
  background-image: url(${props => props.page?Home:Cidades});
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