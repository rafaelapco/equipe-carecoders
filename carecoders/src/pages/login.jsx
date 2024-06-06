
function Login() {
    return <div>
        <div>
            <img src="/images/logo.png" alt="logo-CareCoders" />
            <h3>Bem-Vindo! 
         Faça seu login</h3>
         <div>
         <label for="login">Login:</label>

            <select name="login">
            <option value="cpf">CPF</option>
            <option value="rg">RG</option>
            </select>
            <input type="text" name="documento" placeholder="Documento" />
            <input type="password" name="senha" placeholder="Senha" />
         </div>
         </div>
    </div>;
  }
  
  export default Login;