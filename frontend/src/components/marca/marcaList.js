// MarcaList.js
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const MarcaList = () => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await api.get('/marcas');
        setMarcas(response.data);
      } catch (error) {
        console.error('Erro ao buscar marcas', error);
      }
    };

    fetchMarcas();
  }, []);

  return (
    <div>
      <h2>Lista de Marcas</h2>
      <ul>
        {marcas.map((marca) => (
          <li key={marca._id}>
            {marca.nome}
            {/* Adicione botões para editar ou excluir aqui, se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarcaList;
