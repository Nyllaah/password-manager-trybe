/* eslint-disable react/jsx-max-depth */
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
  const [hidden, setHidden] = useState('hide-btn');

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

  function handleHide() {
    if (hidden === 'hide-btn') {
      setHidden('show-btn');
    } else {
      setHidden('hide-btn');
    }
  }

  function handleType() {
    handleHide();
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }

  return (
    <form onSubmit={ handleSumit }>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="service">Nome do Serviço</label>
          <input
            onChange={ handleChange }
            type="text"
            name="service"
            id="service"
            value={ formData.service }
          />
        </div>
        <div className="login-password-container">

          <div className="input-container">
            <label htmlFor="login">
              Login
              <span className="mandatory">*</span>
            </label>
            <input
              className="login-input"
              onChange={ handleChange }
              type="text"
              name="login"
              id="login"
              value={ formData.login }
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">
              Senha
              <span className="mandatory">*</span>
            </label>

            <div className="password-container">
              <input
                onChange={ handleChange }
                type={ type }
                name="password"
                id="password"
                value={ formData.password }
              />
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                className={ hidden }
                type="button"
                data-testid="show-hide-form-password"
                onClick={ handleType }
              />
            </div>

          </div>

        </div>
        <div className="input-container">
          <label htmlFor="url">URL</label>
          <input
            onChange={ handleChange }
            type="text"
            name="url"
            id="url"
            value={ formData.url }
          />
          <span className="mandatory-message">
            <span className="mandatory">*</span>
            Campos obrigatório
          </span>
        </div>
        <div className="btn-container">
          <button
            type="button"
            onClick={ () => setShowForm(false) }
            className="cancel-btn"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={ isFormValid() }
            className="submit-btn"
          >
            Cadastrar
          </button>
        </div>
      </div>
      <svg className="arrow-img" xmlns="http://www.w3.org/2000/svg" width="21" height="42" viewBox="0 0 21 42" fill="none">
        <path d="M0.5 21L21 0.5V41.5L0.5 21Z" fill="#252730" />
      </svg>
      <ul className="pw-requirements">
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
