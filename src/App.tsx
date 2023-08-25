import { useState } from 'react';

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
        <Title props="Gerenciador de senhas" />
        { showForm ? (
          <Form
            setShowForm={ setShowForm }
            addPassword={ addPassword }
          />
        ) : (
          <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button>
        )}
      </div>
      <div>
        { passwordList.length === 0 ? (
          <p>Nenhuma senha cadastrada...</p>
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
