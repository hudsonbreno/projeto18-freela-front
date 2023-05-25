import styled from "styled-components";
//import Home from "../style/Home.PNG"
import { useState } from "react";

export default function HomePage() {
  const [card, setCard] = useState("1.Escolha a cidade que deseja visitar");
  //    const [ buttonClick, setButtonClick ] = useState(false)

  function trocarCard() {
    if (card === "1.Escolha a cidade que deseja visitar") {
      setCard("2. Veja as passagens disponíveis, com preços e datas");
    }
    if (card === "2. Veja as passagens disponíveis, com preços e datas") {
      setCard(
        "3. Veja os locais aonde você pode se hospedar e todo o conforto que eles oferecem!"
      );
    }
    if (
      card ===
      "3. Veja os locais aonde você pode se hospedar e todo o conforto que eles oferecem!"
    ) {
      setCard("agora");
    }
  }
  return (
    <PageHome>
      <Card>
        <p> {card} </p>
        <button onClick={trocarCard}></button>
      </Card>
    </PageHome>
  );
}

/* <select>
<option value="">Selecione</option>
<option value="Belo_Horizonte">Belo Horizonte</option>
<option value="Sao_Paulo">São Paulo</option>
</select> */

const PageHome = styled.div`
  color: red;
  height: 850px;
  display: flex;
  align-items: end;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Card = styled.div`
  width: 335px;
  height: 211px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
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
  button{
    position: absolute;
    bottom: 30px;
    left: 105px;
    width: 120px;
    height: 40px;
  }
`;
