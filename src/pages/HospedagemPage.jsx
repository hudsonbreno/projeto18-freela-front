import styled from "styled-components"

export default function HospedagemPage(){
    return(
        <PageHotel>
            <p>Nome do Hotel</p>
            <FotosHotel>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
            </FotosHotel>
            <Caracteristicas>
                <p>Local</p>
                <p>Preço</p>
                <p>Descrição</p>
            </Caracteristicas>
            <Comodidades>
                <p>Piscina</p>
                <p>Café da manhã</p>
                <p>Ar condicionado</p>
            </Comodidades>
        </PageHotel>
    )
}
const PageHotel = styled.div`

`
const FotosHotel = styled.div`

`

const Caracteristicas = styled.div`

`

const Comodidades= styled.div`

`