// VendaList.js
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const VendaList = () => {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const response = await api.get('/vendas');
        setVendas(response.data);
      } catch (error) {
        console.error('Erro ao buscar vendas', error);
      }
    };

    fetchVendas();
  }, []);

  return (
    <div>
      <h2>Lista de Vendas</h2>
      <ul>
        {vendas.map((venda) => (
          <li key={venda._id}>
            {venda.data} - {venda.valor}
            {/* Adicione botões para editar ou excluir aqui, se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendaList;
