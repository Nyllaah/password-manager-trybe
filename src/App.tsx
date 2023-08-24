import { useState } from 'react';

import Title from './components/Title';
import Form from './components/Form';
import PasswordCardTypes from './types';

import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [passwordList, setPasswordList] = useState([]);

  function addPassword(newPassword: PasswordCardTypes) {
    setPasswordList([...passwordList, newPassword]);
  }

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
        <PasswordList password={ passwordList } />
      </div>
      <div>
        { passwordList === 0 ? (<p>mostra</p>) : (<p>nao mostra</p>)}
      </div>
    </>
  );
}

export default App;
