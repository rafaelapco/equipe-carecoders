import Header from "../components/Header";
import Banner from "../images/banner.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

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
    </Container>
  );
}

export default Home;
