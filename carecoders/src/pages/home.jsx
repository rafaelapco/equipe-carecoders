import Header from "../components/Header";
import Banner from "../images/banner.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

const Container = styled.div`
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

const ContentContainer = styled.div`
  position: relative;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(84, 127, 185, 0.5);
`;

const Content = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 36px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;

const EmptyDiv = styled.div`
  height: 40vh;
`;
const ServicesContainer = styled.div`
  background-color: #e5edf2;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  h3 {
    padding-top: 25px;
    color: #547fb9;
    font-weight: 700;
    font-size: 36px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
`;

function Home() {
  const navigate = useNavigate();

  const handleSendClick = (url) => {
    console.log("teste");
    navigate(`/${url}`);
  };

  return (
    <Container>
      <Header />
      <BannerImage src={Banner} alt="Banner" />
      <EmptyDiv />
      <ContentContainer>
        <Content>
          <Title>Cadastre-se</Title>
          <p>Crie sua conta e vá para o painel do paciente</p>
          <ButtonContainer>
            <Button
              label="Cadastrar"
              color="#1E1E1E"
              onClick={() => handleSendClick("cadastrar")}
            />
            <Button
              label="Já possui conta? Faça o login"
              color="#fff"
              onClick={() => handleSendClick("login")}
              outlined={true}
            />
          </ButtonContainer>
        </Content>
      </ContentContainer>
      <ServicesContainer>
        <h3>Principais Serviços</h3>
        <CardsWrapper>
          <Card
            imageUrl="url-da-imagem"
            description="Consulta oftalmológica"
            price="100,00"
          />
          <Card
            imageUrl="url-da-imagem"
            description="Exame de sangue"
            price="50,00"
          />
          <Card
            imageUrl="url-da-imagem"
            description="Consulta geriátrica"
            price="80,00"
          />
        </CardsWrapper>
      </ServicesContainer>
    </Container>
  );
}

export default Home;
