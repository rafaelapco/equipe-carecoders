import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 1.5rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  select,
  input {
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 5px;
  }
  label {
    font-size: 1.3rem;
  }
`;

function Form({ type }) {
  return (
    <Container>
      <img src={logo} alt="logo-CareCoders" width={120} height={120} />
      <h3>
        Bem-Vindo! {type === "Login" ? "Faça seu login" : "Faça seu cadastro"}
      </h3>
      <FormContainer>
        <label htmlFor="login">
          <b>{type}:</b>
        </label>
        {type === "Cadastro" && (
          <>
            <label htmlFor="name">Nome completo </label>
            <input type="text" name="nome" placeholder="Digite o seu Nome" />
            <select name="genero de nacimento">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              name="endereco"
              placeholder="Digite seu enderço"
            />
            <label htmlFor="telefone"></label>
            <input
              type="number"
              name="telefone"
              placeholder="Digite seu telefone"
            />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Digite seu email" />
          </>
        )}
        <label htmlFor="cpf">CPF:</label>
        <input type="text" name="cpf" placeholder="Digite seu cpf" />
        <label htmlFor="senha">Senha:</label>
        <input type="password" name="senha" placeholder="Digite sua senha" />
        {type === "Cadastro" && (
          <>
            <label htmlFor="senha">Senha</label>
            <input
              type="paasword"
              name="senha"
              placeholser="Digite uma senha"
            />
            <label htmlFor="corfimarsenha">Confirmar senha</label>
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
            />
          </>
        )}
        <Button
          label={type === "Cadastro" ? "Cadastrar" : "Acessar"}
          color="black"
        />
      </FormContainer>
    </Container>
  );
}

export default Form;
