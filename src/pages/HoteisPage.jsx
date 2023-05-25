import styled from "styled-components"

export default function HoteisPage(){
    const cidade = styled.div`
    
    `
    return(
        <PageHoteis>
        <Menu>
            <p>Preço Mínimo</p>
            <bar>Barra</bar>
            <p>Preço Máximo</p>
            <bar>Barra</bar>
        </Menu>
        <Hoteis>
            <p>Hospedagens em {cidade}</p>
        </Hoteis>
        </PageHoteis>
    )
}

const PageHoteis= styled.div`
    display: flex;
    flex-direction: row;
`

const Menu = styled.div`
    margin-left:20px;
    width: 20%;
`

const Hoteis = styled.div`
    
`