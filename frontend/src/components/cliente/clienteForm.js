// ClienteForm.js
import React, { useState } from 'react';
import api from '../../services/api';

const ClienteForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveCliente = async () => {
    try {
      await api.post('/clientes', { nome, email });
      console.log('Cliente salvo com sucesso!');
      setNome('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao salvar cliente', error);
    }
  };

  return (
    <div>
      <h2>Formulário de Cliente</h2>
      <form>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSaveCliente}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default ClienteForm;
