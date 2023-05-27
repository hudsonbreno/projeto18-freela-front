import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage({setPage, page}) {
  const [card, setCard] = useState("1.Escolha a cidade que deseja visitar");
  const [buttonClick, setButtonClick] = useState("flex");

  console.log(page)

  function trocarCard() {
    if (card === "1.Escolha a cidade que deseja visitar") {
      setCard("2. Veja as passagens disponíveis, com preços e datas");
    }
    if (card === "2. Veja as passagens disponíveis, com preços e datas") {
      setCard(
        "3. Veja os locais aonde você pode se hospedar e todo o conforto que eles oferecem!"
      );
      setButtonClick("none");
    }

  }
  return (
    <PageHome>
      <Card buttonClick={buttonClick}>
        <p> {card} </p>
        <button onClick={trocarCard} >Avançar</button>
        <Link to="/cidades" >Escolha a cidadeadsadsadsadsada</Link>
      </Card>
    </PageHome>
  );
}

const PageHome = styled.div`
  color: red;
  height: 850px;
  display: flex;
  align-items: center;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Card = styled.div`
  width: 335px;
  height: 211px;
  border-radius: 32px;
  background-color: rgb(255, 255, 255, 0.5);
  border: 4px gray solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  p {
    width: 90%;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    text-align: center;

    color: #000000;
    padding-bottom: 12px;
  }
  button {
    display: ${props => props.buttonClick};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    left: 105px;
    width: 120px;
    height: 40px;
  }
  a{
    display: ${props => props.buttonClick=="flex"? "none":"flex" };
  }
`;
