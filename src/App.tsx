import { useState } from 'react';

import Title from './components/Title';
import Form from './components/Form';
// import Button from './components/button';

import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Title props="Gerenciador de senhas" />
      { showForm ? (
        <Form setShowForm={ false } />
      ) : (
        <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button>
      )}
    </>
  );
}

export default App;
