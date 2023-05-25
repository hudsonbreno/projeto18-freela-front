import styled from "styled-components";

export default function CidadesPage() {
  return (
    <PageCidades>
      <BarraCidade>
        <div className="qualCidade">
          <p>Qual cidade vai ter sua visita?</p>
          <p>View all</p>
        </div>
        <div className="pesquisar">
          <div className="icone"></div>
        </div>
      </BarraCidade>

      <p class="cidadesFamosas">Cidades Famosas</p>
      <Cidades>
        <Card>
          <img src="" alt="" />
          <h1>Data e horario</h1>
          <h2>Preço</h2>
          <h1>Local de partida</h1>
        </Card>
        <Card>
          <img src="" alt="" />
          <h1>Data e horario</h1>
          <h2>Preço</h2>
          <h1>Local de partida</h1>
        </Card>
        <Card>
          <img src="" alt="" />
          <h1>Data e horario</h1>
          <h2>Preço</h2>
          <h1>Local de partida</h1>
        </Card>
        <Card>
          <img src="" alt="" />
          <h1>Data e horario</h1>
          <h2>Preço</h2>
          <h1>Local de partida</h1>
        </Card>
      </Cidades>
      <Filtro>
        <h1>Filtro</h1>
        <p>Preço Mínimo</p>
        <Range>
          <p>0</p>
          <input type="range" min="0" max="100" step="10" />
          <p>MAX</p>
        </Range>
        <p>Preço Máximo</p>
        <Range>
          <p>0</p>
          <input type="range" min="0" max="100" step="10" />
          <p>MAX</p>
        </Range>
      </Filtro>
    </PageCidades>
  );
}

const PageCidades = styled.div`
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
const BarraCidade = styled.div`
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
  .pesquisar {
    width: 305px;
    height: 39px;
    background-color: white;
    border-radius: 10px;
    filter: drop-shadow(5px 5px 4px #555555);
  }
`;

const Cidades = styled.div`
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
  height: 159px;
  background-color: red;
  border-radius: 15px;
  img {
    width: 107px;
    height: 101px;
  }
  h1 {
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    color: #000000;
  }
  h2 {
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    color: #000000;
  }
`;

const Filtro = styled.div`
display: flex;
flex-direction:column;
  h1 {
    padding-left: 20px;
    padding-right: 10px;
    font-family: "Bree Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    padding-bottom: 10px;
    padding-top: 30px;

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
