// VendedorForm.js
import React, { useState } from 'react';
import api from '../../services/api';

const VendedorForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveVendedor = async () => {
    try {
      await api.post('/vendedores', { nome, email });
      console.log('Vendedor salvo com sucesso!');
      setNome('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao salvar vendedor', error);
    }
  };

  return (
    <div>
      <h2>Formulário de Vendedor</h2>
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
        <button type="button" onClick={handleSaveVendedor}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default VendedorForm;
