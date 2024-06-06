import styled from 'styled-components';
import logo from '../images/logo.png'
import Button from './Button';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`

const FormContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 80%;
 select,
  input {
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 5px;
  }
`

function Form({ type }) {
    return (
      
        <Container>
          <img src={logo} alt="logo-CareCoders" width={120} height={120} />
          <h3>Bem-Vindo! {type === 'Login' ? 'Faça seu login' : 'Faça seu cadastro'}</h3>
          <FormContainer>
            <label htmlFor="login"><b>{type}:</b></label>
            {type === 'Cadastro' && (
              <>            
                <input type="text" name="nome" placeholder="Nome" />
                <select name="genero">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="naoBinario">Não Binário</option>
              <option value="naoInformado">Prefiro não informar</option>

            </select>
              </>
            )}
            <select name="documento">
              <option value="cpf">CPF</option>
              <option value="rg">RG</option>
            </select>
            <input type="text" name="documento" placeholder="Documento" />
            <input type="password" name="senha" placeholder="Senha" />
            {type === 'Cadastro' && (
              <>
                <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" />
                
              </>
              
            )}
             <Button 
          label={type === 'Cadastro' ? "Cadastrar" : "Acessar"} 
          color="#28a745" 
          hoverColor="#218838" 
        />
          </FormContainer>
        </Container>
      
    );
  }
  
  export default Form;