import Button from './button';

type FormProps = {
  setShowForm: boolean
};

function Form({ setShowForm }: FormProps) {
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
      <button onClick={ () => setShowForm }>Cancelar</button>
    </form>
  );
}

export default Form;
