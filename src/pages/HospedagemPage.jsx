import styled from "styled-components"
import { Link } from "react-router-dom";

export default function HospedagemPage({ dadosHospedagem  }){
    
    return(
        <PagePassagens>
            <Informaçoes>
                {console.log(dadosHospedagem)}
                <h1>Nome: {dadosHospedagem.nomeHotel}</h1>
                <p>Caracteristicas: {dadosHospedagem.caracteristicas}</p>
                <p>Comodidades: {dadosHospedagem.comodidades}</p>
                <p>Valor por dia: {dadosHospedagem.valor_dia}</p>
            </Informaçoes>
            <Botoes>
                <Link to="/cidades">Voltar</Link>
                <Link to="/finalizar">Finalizar</Link>
            </Botoes>
        </PagePassagens>
    )
}
const PagePassagens = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`

const Informaçoes = styled.div`
 h1{
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    padding-top: 20px;
    padding-bottom: 20px;

    color: #000000;
 }

 p {
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;

    color: #000000;
 }
`

const Botoes = styled.div`
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a{
        padding-left: 20px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;

    color: #000000;
        width: 90px;
        height: 70px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
    }
`