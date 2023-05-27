import { Link } from "react-router-dom"
import styled from "styled-components";
import cidade from "../style/icone/cidade.png";
import conta from "../style/icone/conta.png";
import hotel from "../style/icone/hotel.png";
import webHouse from "../style/icone/web-house.png";

export default function Footer({ page }) {

  return (
    <FooterPage page={page}>
      <Link to="/">aqui</Link><img src={webHouse} alt="Home" />
      <img src={cidade} alt="Cidades" />
      <img src={hotel} alt="Hoteis" />
      <img src={conta} alt="Finalizar" />
    </FooterPage>
  );
}

const FooterPage = styled.div`
  display: ${props => props.page?"none":"flex"};
  height: 94px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: beige;
  align-items: center;
  justify-content: space-around;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #5DAFC6;
  img{
    width: 28px;
    height: 28px;
  }
`;
