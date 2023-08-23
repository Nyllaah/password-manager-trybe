import { useState } from 'react';

import Title from './components/Title';
import Form from './components/Form';
import PasswordCard from './components/PasswordCard';
// import Button from './components/button';

import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Title props="Gerenciador de senhas" />
      { showForm ? (
        <Form setShowForm={ setShowForm } />
      ) : (
        <div>
          <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button>
          <p>Não há nenhuma senha cadastrada...</p>
        </div>
      )}
      <PasswordCard service="teste" login="teste1" password="1234" url="teste.com" />
    </>
  );
}

export default App;
