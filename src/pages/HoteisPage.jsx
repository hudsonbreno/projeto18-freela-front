import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import hotelzinho from "../style/hoteis/hotelzinho.PNG"
import tiazinha from "../style/hoteis/tiazinha.PNG"

export default function HoteisPage({
  dadosPassagem,
  setDadosHospedagem
}) {

  const [ selecionarHotel, setSelecionarHotel ] = useState(`${dadosPassagem.cidadeDestino}`);
  const [ cardHotel, setCardHotel ] = useState([]);
  const [ min, setMin ] = useState(0);
  const [ max, setMax ] = useState(100000);

  useEffect(() => {
    try {
      const cards = axios.get(
        `http://localhost:5000/hoteis/especificarCidade?cidadeNome=${dadosPassagem.cidadeDestino}&min=${min}&max=${max}`
      );
      cards.then((res) => {
        setCardHotel(res.data);
      });
    } catch (err) {
      console.log(err.message);
    }
  }, []);


  function cardsHotel(valueHotel) {
    try {
      let cidade = `${valueHotel}`;
      cidade = cidade.replace(/ /g, '%20');
      console.log(`http://localhost:5000/hoteis/especificar?cidadeNome=${cidade}&min=${min}&max=${max}`)
      const promise = axios.get(
        `http://localhost:5000/cidades/especificar?cidadeNome=${valueHotel}&min=${min}&max=${max}`
      );
      promise.then((res) => {
        setCardHotel(res.data);
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  function imagemHotel(hotel) {
    switch (hotel) {
      case "Hotel da tiazinha":
        return tiazinha;
      case "Hotelzinho":
        return hotelzinho;

      default:
        return "";
    }
  }

  return (
    <PageHoteis>
      <BarraHotel>
        <div className="qualHotel">
          <p>Qual Hotel vai acomoda-lo?</p>
        </div>
      </BarraHotel>
      <Filtro>
        <h1>Filtro</h1>
        <div className="digitar">
          <p>Preço Mínimo</p>
          <input
            type="text"
            value={min}
            onChange={(e) => {
              e.preventDefault();
              setMin(e.target.value);
            }}
          ></input>
        </div>
        <Range>
          <p>0</p>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={min}
            onChange={(e) => {
              e.preventDefault();
              setMin(e.target.value);
            }}
          />
          <p>MAX</p>
        </Range>
        <div className="digitar">
          <p>Preço Máximo</p>
          <input
            type="text"
            value={max}
            onChange={(e) => {
              e.preventDefault();
              setMax(e.target.value);
            }}
          ></input>
        </div>
        <Range>
          <p>0</p>
          <input
            type="range"
            min="0"
            max="9000"
            step="100"
            value={max}
            onChange={(e) => {
              e.preventDefault();
              setMax(e.target.value);
            }}
          />
          <p>MAX</p>
        </Range>
        <button
          onClick={(e) => {
            e.preventDefault();
            cardsHotel(selecionarHotel);
          }}
        >
          Filtar
        </button>
      </Filtro>
      <p className="cidadesFamosas">Opções de viagem</p>
      <Hoteis>
        {cardHotel.map((item, index) => {
          return (
            <Card key={index}>
              <Link to="/hospedagem">
                <button value={item} onClick={()=>setDadosHospedagem(item)}>
                  <img src={imagemHotel(item.nomeHotel)} />
                  <h1>{item.nomeHotel}</h1>
                  <h2>{item.valor_dia}</h2>
                </button>
              </Link>
            </Card>
          );
        })}
      </Hoteis>
    </PageHoteis>
  );
}

const PageHoteis = styled.div`
  display: flex;
  width: 360px;
  flex-direction: column;
  .cidadesFamosas {
    width: 305px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 20px;

    color: #000000;
  }
`;
const BarraHotel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 31px;
  margin-bottom: 9px;

  .qualCidade {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
    margin-bottom: 9px;
  }
  p {
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;

    color: #000000;
  }
  select {
    width: 305px;
    height: 39px;
    background-color: white;
    border-radius: 10px;
    filter: drop-shadow(5px 5px 4px #555555);

    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;

    color: #000000;
  }
`;

const Hoteis = styled.div`
  display: flex;
  margin-left: 30px;
  overflow-x: scroll;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12px;
  width: 124px;
  height: 227px;
  border-radius: 15px;
  text-align: center;

  img {
    width: 100px;
    height: 120px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  h1 {
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;

    color: #000000;
  }
  h2 {
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;

    color: #000000;
  }
`;

const Filtro = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    padding-bottom: 10px;
    padding-top: 15px;

    color: #000000;
  }
  p {
    margin-bottom: 5px;
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    padding-bottom: 10px;

    color: #000000;
  }
  .digitar {
    width: 300px;
    display: flex;
    justify-content: space-around;
  }

  .digitar input {
    width: 100px;
  }
`;

const Range = styled.div`
  width: 350px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 260px;
  }
  p {
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    color: #000000;
  }
`;
