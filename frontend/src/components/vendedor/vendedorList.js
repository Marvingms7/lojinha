// VendedorList.js
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const VendedorList = () => {
  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
    const fetchVendedores = async () => {
      try {
        const response = await api.get('/vendedores');
        setVendedores(response.data);
      } catch (error) {
        console.error('Erro ao buscar vendedores', error);
      }
    };

    fetchVendedores();
  }, []);

  return (
    <div>
      <h2>Lista de Vendedores</h2>
      <ul>
        {vendedores.map((vendedor) => (
          <li key={vendedor._id}>
            {vendedor.nome} - {vendedor.email}
            {/* Adicione botões para editar ou excluir aqui, se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendedorList;
