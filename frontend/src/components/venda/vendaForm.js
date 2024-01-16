import React, { useState } from 'react';
import api from '../../services/api';

const VendaForm = () => {
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');

  const handleSaveVenda = async () => {
    try {
      await api.post('/vendas', { data, valor });
      console.log('Venda salva com sucesso!');
      setData('');
      setValor('');
    } catch (error) {
      console.error('Erro ao salvar venda', error);
    }
  };

  return (
    <div>
      <h2>Formulário de Venda</h2>
      <form>
        <label>
          Data:
          <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        </label>
        <br />
        <label>
          Valor:
          <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSaveVenda}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default VendaForm;
