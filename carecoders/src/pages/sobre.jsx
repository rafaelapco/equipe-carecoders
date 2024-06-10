import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import AccessibillityHeader from "../components/AccessibilityHeader";
import NurseImage from "../images/nurse.jpg";
import PacienteImage from "../images/paciente.jpeg";
import RoundedImage from "../components/RoundedImage";
import Logo2 from "../images/Logo2.png";

const Container = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #e5edf2;
`;

const Content = styled.div`
  text-align: center;
  padding: 20px;
  margin-left: 240px;
  margin-right: 240px;
  margin-top: 100px;
  margin-bottom: 130px;

  h1 {
    color: #547fb9;
  }

  h3 {
    color: #003781;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
    height: 50px;
  }
`;

const Sobre = () => {
  const navigate = useNavigate();

  const handleSendClick = (url) => {
    console.log("teste");
    navigate(`/${url}`);
  };

  return (
    <Container>
      <AccessibillityHeader />
      <Header />
      <ContentContainer>
        <Content>
          <SubTitle>
            <img src={Logo2} alt="logo-carecoders-semtexto" />
            <h1>CareCoders</h1>
          </SubTitle>
          <p>
            No Hospital CareCoders, unimos a precisão do código à arte do
            cuidado. Somos mais que um hospital; somos uma comunidade de saúde
            comprometida com o seu bem-estar. Nossos médicos, enfermeiros e
            profissionais dedicados trabalham incansavelmente para decifrar os
            desafios da saúde, oferecendo tratamento personalizado e humano.
            Seja bem-vindo ao lugar onde a tecnologia e a compaixão se encontram
            para curar.
          </p>
          <RoundedImage src={NurseImage} alt="Nurse Image" size="170px" />
          <h3>Missão</h3>

          <p>
            Nossa missão é transcender os limites da saúde, combinando a
            precisão do código com a compaixão humana. Cuidamos não apenas dos
            corpos, mas também das almas. Somos uma equipe dedicada a restaurar
            vidas, decifrando os desafios médicos com inovação e empatia. No
            Hospital CareCoders, transformamos cuidado em cura e tecnologia em
            esperança.
          </p>
          <RoundedImage src={PacienteImage} alt="Paciente Image" size="170px" />
          <h3>Visão</h3>
          <p>
            Ser o farol da saúde, guiando pacientes e profissionais com
            conhecimento, compaixão e inovação. No Hospital CareCoders, a cura é
            nossa constante busca e a esperança é nosso norte.
          </p>
          <CardsContainer>
            <Card>
              <h3>Especialidades</h3>
              <p>
                A Clínica CareCoders conta com mais de 20 profissionais
                especializados em 11 áreas. Confira todas as especialidades e
                agende uma consulta agora mesmo!
              </p>
            </Card>
            <Card>
              <h3> Exames e Procedimentos </h3>
              <p>
                Confira todos os exames e procedimentos realizados pela Clínica
                CareCoders e saiba mais sobre cada um deles com suas respectivas
                orientações!
              </p>
            </Card>
            <Card>
              <h3>Corpo Clínico</h3>
              <p>
                Possuímos uma equipe moderna, qualificada e multidisciplinar
                para entregar aos pacientes o que há de melhor na cardiologia e
                outras áreas de atuação. Confira!
              </p>
            </Card>
          </CardsContainer>
        </Content>
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default Sobre;
