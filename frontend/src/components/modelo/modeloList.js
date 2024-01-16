// ModeloList.js
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const ModeloList = () => {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    const fetchModelos = async () => {
      try {
        const response = await api.get('/modelos');
        setModelos(response.data);
      } catch (error) {
        console.error('Erro ao buscar modelos', error);
      }
    };

    fetchModelos();
  }, []);

  return (
    <div>
      <h2>Lista de Modelos</h2>
      <ul>
        {modelos.map((modelo) => (
          <li key={modelo._id}>
            {modelo.nome} - {modelo.ano}
            {/* Adicione botões para editar ou excluir aqui, se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModeloList;
