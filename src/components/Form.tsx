import Button from './button';

function Form() {
  return (
    <form>
      <label>
        Nome do Serviço
        <input />
      </label>
      <label>
        Login
        <input />
      </label>
      <label>
        Senha
        <input />
      </label>
      <label>
        URL
        <input />
      </label>
      <Button btnName="Cadastrar" />
      <Button btnName="Cancelar" />
    </form>
  );
}

export default Form;
