import { useState } from 'react';
import { FormProps, FormDataProps } from '../types';

function Form({ setShowForm, addPassword }: FormProps) {
  const [formData, setFormData] = useState<FormDataProps>({
    service: '',
    login: '',
    password: '',
    url: '',
  });

  const [type, setType] = useState('password');

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

  function passwordValidation(validation: boolean) {
    return (validation ? 'valid-password-check'
      : 'invalid-password-check'
    );
  }

  function handleSumit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    addPassword(formData);
    setFormData({
      service: '',
      login: '',
      password: '',
      url: '',
    });
    setShowForm(false);
  }

  return (
    <form onSubmit={ handleSumit }>
      <label htmlFor="service">Nome do Serviço</label>
      <input
        onChange={ handleChange }
        type="text"
        name="service"
        id="service"
        value={ formData.service }
      />
      <label htmlFor="login">Login</label>
      <input
        onChange={ handleChange }
        type="text"
        name="login"
        id="login"
        value={ formData.login }
      />
      <label htmlFor="password">Senha</label>
      <input
        onChange={ handleChange }
        type={ type }
        name="password"
        id="password"
        value={ formData.password }
      />
      <button
        type="button"
        data-testid="show-hide-form-password"
        onClick={ () => (type === 'password' ? setType('text') : setType('password')) }
      >
        Mostrar

      </button>
      <label htmlFor="url">URL</label>
      <input
        onChange={ handleChange }
        type="text"
        name="url"
        id="url"
        value={ formData.url }
      />
      <button
        type="submit"
        disabled={ isFormValid() }
      >
        Cadastrar
      </button>
      <button type="button" onClick={ () => setShowForm(false) }>Cancelar</button>
      <ul>
        <li className={ passwordValidation(isPasswordTooShort) }>
          Possuir 8 ou mais caracteres
        </li>
        <li className={ passwordValidation(isPasswordTooLong) }>
          Possuir até 16 caracteres
        </li>
        <li className={ passwordValidation(passwordHasLettersAndNumbers) }>
          Possuir letras e números
        </li>
        <li className={ passwordValidation(passwordHasSpecialChar) }>
          Possuir algum caractere especial
        </li>
      </ul>
    </form>
  );
}

export default Form;
