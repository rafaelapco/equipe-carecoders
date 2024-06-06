import styled from "styled-components";

const CardContainer = styled.div`
  width: 320px;
  max-height: 420px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  max-height: 320px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
  text-align: left;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const Card = ({ imageUrl, description }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt="Card" />
      <Content>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
  );
};

export default Card;
