import { styled } from "styled-components";
import Logo from "../style/logo.png"

export default function Cabecalho(){
    return(
            <Banner>
                <img src={Logo} alt="" />
            </Banner>
    );
}

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