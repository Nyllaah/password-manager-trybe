import { useState } from 'react';
import Swal from 'sweetalert2';

import Title from './components/Title';
import Form from './components/Form';
import { FormDataProps } from './types';
import PasswordList from './components/PasswordList';

import './App.css';

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [passwordList, setPasswordList] = useState<FormDataProps[]>([]);
  const [showPasswords, setShowPasswords] = useState<boolean>(true);

  const addPassword = (newPassword: FormDataProps) => {
    setPasswordList([...passwordList, newPassword]);
    Swal.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleRemove = (id: number) => {
    const newList = passwordList.filter((card, index) => index !== id);
    setPasswordList(newList);
  };

  const handleCheckbox = () => {
    setShowPasswords(!showPasswords);
  };

  return (
    <>
      <div>
        <Title />
        { showForm ? (
          <Form
            setShowForm={ setShowForm }
            addPassword={ addPassword }
          />
        ) : (
          <button
            className="new-pw-btn"
            onClick={ () => setShowForm(true) }
          >
            Cadastrar nova senha
          </button>
        )}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="291" height="4" viewBox="0 0 291 4" fill="none">
        <path d="M0 2H291" stroke="#CACACA" strokeWidth="3" />
      </svg>
      <div>
        { passwordList.length === 0 ? (
          <>
            <p className="no-passwords">Nenhuma senha cadastrada...</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                // eslint-disable-next-line max-len
                d="M23.7242 31.6321C24.816 31.6321 25.7012 30.747 25.7012 29.6551C25.7012 28.5632 24.816 27.6781 23.7242 27.6781C22.6323 27.6781 21.7471 28.5632 21.7471 29.6551C21.7471 30.747 22.6323 31.6321 23.7242 31.6321Z"
                fill="#838383"
              />
              <path
                // eslint-disable-next-line max-len
                d="M33.6092 15.8161H19.7701V11.862C19.7701 10.8134 20.1867 9.80763 20.9282 9.06611C21.6698 8.32459 22.6755 7.908 23.7241 7.908C24.7728 7.908 25.7785 8.32459 26.5201 9.06611C27.2616 9.80763 27.6782 10.8134 27.6782 11.862C27.6782 12.3864 27.8865 12.8892 28.2572 13.26C28.628 13.6307 29.1308 13.839 29.6552 13.839C30.1795 13.839 30.6824 13.6307 31.0531 13.26C31.4239 12.8892 31.6322 12.3864 31.6322 11.862C31.6322 9.76468 30.799 7.75324 29.316 6.27019C27.8329 4.78715 25.8215 3.95398 23.7241 3.95398C21.6268 3.95398 19.6154 4.78715 18.1323 6.27019C16.6493 7.75324 15.8161 9.76468 15.8161 11.862V15.8161H13.8391C12.2661 15.8161 10.7575 16.4409 9.64521 17.5532C8.53293 18.6655 7.90805 20.1741 7.90805 21.7471V37.5632C7.90805 39.1362 8.53293 40.6448 9.64521 41.7571C10.7575 42.8693 12.2661 43.4942 13.8391 43.4942H33.6092C35.1822 43.4942 36.6908 42.8693 37.8031 41.7571C38.9154 40.6448 39.5402 39.1362 39.5402 37.5632V21.7471C39.5402 20.1741 38.9154 18.6655 37.8031 17.5532C36.6908 16.4409 35.1822 15.8161 33.6092 15.8161ZM23.7241 35.5862C22.5511 35.5862 21.4044 35.2383 20.429 34.5866C19.4537 33.9349 18.6935 33.0086 18.2446 31.9248C17.7957 30.8411 17.6782 29.6486 17.9071 28.498C18.1359 27.3475 18.7008 26.2907 19.5303 25.4613C20.3597 24.6318 21.4165 24.0669 22.5671 23.8381C23.7176 23.6092 24.9101 23.7267 25.9939 24.1756C27.0776 24.6245 28.0039 25.3847 28.6556 26.36C29.3073 27.3354 29.6552 28.4821 29.6552 29.6551C29.6552 31.2281 29.0303 32.7367 27.918 33.849C26.8057 34.9613 25.2972 35.5862 23.7241 35.5862Z"
                fill="#838383"
              />
            </svg>
          </>
        ) : (
          <PasswordList
            handleRemove={ handleRemove }
            passwordList={ passwordList }
            handleCheckbox={ handleCheckbox }
            showPasswords={ showPasswords }
          />
        )}
      </div>
    </>
  );
}

export default App;
