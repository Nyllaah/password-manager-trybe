import { useState } from 'react';
// import Button from './button';

type FormProps = {
  setShowForm: (show: boolean) => void
};

function Form({ setShowForm }: FormProps) {
  const [formData, setFormData] = useState({
    service: '',
    login: '',
    password: '',
    url: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const { service, login, password } = formData;

  const isServiceAndLoginValid = (service.length === 0 || login.length === 0);
  const isPasswordTooShort = password.length >= 8;
  const isPasswordTooLong = password.length <= 16;
  const passwordHasLettersAndNumbers = (/^(?=.*[a-zA-Z])(?=.*\d).+$/).test(password);
  const passwordHasSpecialChar = (/^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/).test(password);

  function isFormValid() {
    return (
      isServiceAndLoginValid
      || !(isPasswordTooShort
      && isPasswordTooLong
      && passwordHasLettersAndNumbers
      && passwordHasSpecialChar)
    );
  }

  function PasswordValidation(validation: boolean) {
    return (validation ? 'valid-password-check'
      : 'invalid-password-check'
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // handleChange(e);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="service">
        Nome do Serviço
        <input onChange={ handleChange } name="service" value={ formData.service } />
      </label>
      <label htmlFor="login">
        Login
        <input onChange={ handleChange } name="login" value={ formData.login } />
      </label>
      <label htmlFor="password">
        Senha
        <input onChange={ handleChange } name="password" value={ formData.password } />
      </label>
      <label htmlFor="url">
        URL
        <input onChange={ handleChange } name="url" value={ formData.url } />
      </label>
      <button type="submit" disabled={ isFormValid() }>Cadastrar</button>
      <button type="button" onClick={ () => setShowForm }>Cancelar</button>
      <ul>
        <li className={ PasswordValidation(isPasswordTooShort) }>
          Possuir 8 ou mais caracteres
        </li>
        <li className={ PasswordValidation(isPasswordTooLong) }>
          Possuir até 16 caracteres
        </li>
        <li className={ PasswordValidation(passwordHasLettersAndNumbers) }>
          Possuir letras e números
        </li>
        <li className={ PasswordValidation(passwordHasSpecialChar) }>
          Possuir algum caractere especial
        </li>
      </ul>
    </form>
  );
}

export default Form;
