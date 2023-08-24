import { useState } from 'react';

import Title from './components/Title';
import Form from './components/Form';
import { PasswordCardTypes } from './types';
import PasswordList from './components/PasswordList';

import './App.css';

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [passwordList, setPasswordList] = useState<PasswordCardTypes[]>([]);

  const addPassword = (newPassword: PasswordCardTypes) => {
    setPasswordList([...passwordList, newPassword]);
  };

  return (
    <>
      <div>
        <Title props="Gerenciador de senhas" />
        { showForm ? (
          <Form setShowForm={ setShowForm } addPassword={ addPassword } />
        ) : (
          <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button>
        )}
      </div>
      <div>
        { passwordList.length === 0 ? (
          <p>Nenhuma senha cadastrada...</p>
        ) : (
          <PasswordList passwordList={ passwordList } />
        )}
      </div>
    </>
  );
}

export default App;
