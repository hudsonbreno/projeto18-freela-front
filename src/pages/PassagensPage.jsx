import styled from "styled-components"

export default function PassagensPage(){
    
    const cidade = "Belo Horizonte"
    const nome = "Azul"
    const hora_partida = "17:51"
    const hora_chegada = "19:10"
    const preço = 159.50
    return(
        <PagePassagens>
            <Informaçoes>
                <h1>Passagem para CIDADE</h1>

                <p>Cidade de Destino: {cidade}</p>
                <p>Cidade de Origem: {cidade}</p>
                <p>Companhia aérea: {nome}</p>
                <p>Horário de partida: {hora_partida}</p>
                <p>Horário previsto de chegada: {hora_chegada}</p>
                <p>Preço da Passagem: {preço}</p>
            </Informaçoes>
        </PagePassagens>
    )
}
const PagePassagens = styled.div`

`

const Informaçoes = styled.div`

`