import Header from "../components/Header";
import Banner from "../images/banner.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import AccessibillityHeader from "../components/AccessibilityHeader";
import Footer from "../components/Footer";
import Oftalmologia from "../images/oftalmologia.jpg";
import Geriatria from "../images/geriatria.jpg";
import Examesangue from "../images/examesangue.jpg";
import Logo2 from "../images/Logo2.png";

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
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
`;

const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #547fb9;
  font-weight: 800;
  font-size: 16px;
  text-align: center;
  max-width: 320px;
`;

const ServicesContainer = styled.div`
  background-color: #e5edf2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: #547fb9;
    font-weight: 700;
    font-size: 36px;
  }
  span {
    cursor: pointer;
    color: #547fb9;
    margin-bottom: 10px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
    height: 50px;
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleSendClick = (url) => {
    console.log("teste");
    navigate(`/${url}`);
  };

  return (
    <Container>
      <AccessibillityHeader />
      <Header />
      <BannerImage src={Banner} alt="Banner" />
      <EmptyDiv>
        <InfoBox>
          Hospital CareCoders, cuidamos de você com a precisão de um código bem
          escrito. Sua saúde é nossa missão!
        </InfoBox>
      </EmptyDiv>
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
        <SubTitle>
          <img src={Logo2} alt="logo-carecoders-semtexto" />
          <h3>Principais Serviços</h3>
        </SubTitle>
        <CardsWrapper>
          <Card
            imageUrl={Oftalmologia}
            description="Consulta oftalmológica"
            price="100,00"
          />
          <Card
            imageUrl={Examesangue}
            description="Exame de sangue"
            price="50,00"
          />
          <Card imageUrl={Geriatria} description="Consulta geriátrica" />
        </CardsWrapper>
        <span>Ver mais</span>
      </ServicesContainer>
      <Footer />
    </Container>
  );
}

export default Home;
