// MarcaForm.js
import React, { useState } from 'react';
import api from '../../services/api';

const MarcaForm = () => {
  const [nome, setNome] = useState('');

  const handleSaveMarca = async () => {
    try {
      await api.post('/marcas', { nome });
      console.log('Marca salva com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao salvar marca', error);
    }
  };

  return (
    <div>
      <h2>Formulário de Marca</h2>
      <form>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSaveMarca}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default MarcaForm;
