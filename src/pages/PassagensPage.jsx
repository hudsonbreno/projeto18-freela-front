import styled from "styled-components"
import { Link } from "react-router-dom";

export default function PassagensPage({ dadosPassagem }){
    
    function transformarHora(horario) {
        const dataHora = new Date(horario);
    
        const horas = ("0" + dataHora.getHours()).slice(-2);
        const minutos = ("0" + dataHora.getMinutes()).slice(-2);
    
        const dia = ("0" + dataHora.getDate()).slice(-2);
        const mes = ("0" + (dataHora.getMonth() + 1)).slice(-2);
        const ano = dataHora.getFullYear().toString().slice(-2);
    
        return (`${horas}:${minutos} ${dia}/${mes}/${ano}`);
      }
    return(
        <PagePassagens>
            <Informaçoes>
                <h1>Passagem para {dadosPassagem.cidadeDestino}</h1>
                <p>Cidade de Destino: {dadosPassagem.cidadeDestino}</p>
                <p>Cidade de Origem: {dadosPassagem.cidadeOrigem}</p>
                <p>Horário de partida: {transformarHora(dadosPassagem.horarioPartida)}</p>
                <p>Horário previsto de chegada: {transformarHora(dadosPassagem.horarioPrevista)}</p>
                <p>Preço da Passagem: {dadosPassagem.preco}</p>
            </Informaçoes>
            <Botoes>
                <Link to="/cidades">Voltar</Link>
                <Link to="/hoteis">Continuar</Link>
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