import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 10px;
`;

const Address = styled.div`
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <p>Contato: (11) 1234-5678</p>
        <p>Email: contato@carecoders.com</p>
      </ContactInfo>
      <Address>
        <p>Endereço: Rua Exemplo, 123, Bairro Exemplar, Cidade Exemplo, SP</p>
      </Address>
    </FooterContainer>
  );
};

export default Footer;
