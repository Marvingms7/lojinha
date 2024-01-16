// ClienteList.js
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await api.get('/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes', error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente._id}>
            {cliente.nome} - {cliente.email}
            {/* Adicione botões para editar ou excluir aqui, se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
