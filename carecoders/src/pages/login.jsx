import Form from "../components/Form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Redefinicoes = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreateAccountButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

const ForgotPasswordLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;
`;

function Login() {
  return (
    <div>
      <Form type="Login" />
      <div class="redefinicoes">
        <div>
          <span class="novo">Novo no Portal?</span>
          <a class="" href="/cadastro">
            <button class="createAccountLink" type="button">
              <span>CRIAR UMA CONTA</span>
            </button>
          </a>
        </div>
        <a href="/forgot_password" class="forgotPassword">
          Esqueceu sua senha?
        </a>
      </div>
    </div>
  );
}

export default Login;
