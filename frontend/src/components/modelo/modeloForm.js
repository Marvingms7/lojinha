import React, { useState } from 'react';
import api from '../../services/api';

const ModeloForm = () => {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState('');

  const handleSaveModelo = async () => {
    try {
      await api.post('/modelos', { nome, ano });
      console.log('Modelo salvo com sucesso!');
      setNome('');
      setAno('');
    } catch (error) {
      console.error('Erro ao salvar modelo', error);
    }
  };

  return (
    <div>
      <h2>Formulário de Modelo</h2>
      <form>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Ano:
          <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSaveModelo}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default ModeloForm;
