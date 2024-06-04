import axios from "axios";

import { API_ADDRESS } from "./constant";

// Adicionar Roupa
export async function adicionarRoupa(corp) {
  let url = API_ADDRESS + '/roupa';

  let r = await axios.post(url, corp);
  return r.data;
}

// Salvar uma roupa existente
export async function salvarProduto(id, nome, descricao, modelo, preco, material, navigate) {
  const url = API_ADDRESS + `/roupa/${id ? id : ''}`;
  const corpo = {
    nome,
    descricao,
    modelo,
    preco,
    material
  };

  try {
    if (id) {
      await axios.put(url, corpo);
      alert('Produto alterado com sucesso.');
      navigate('/verificacao');
    } else {
      const response = await axios.post(url, corpo);
      alert('Produto inserido com ID: ' + response.data.id);
    }
  } catch (error) {
    console.error('Erro ao salvar o produto:', error);
    alert('Erro ao salvar o produto.');
  }
}

// Remover produto
export async function removerProduto(id, navigate) {
  if (!id) {
    alert('Selecione um produto para remover.');
    return;
  }

  const url = API_ADDRESS + `/roupa/${id}`;

  try {
    await axios.delete(url);
    alert('Produto removido com sucesso.');
    navigate('/verificacao');
  } catch (error) {
    console.error('Erro ao remover o produto:', error);
    alert('Erro ao remover o produto.');
  }
}

// Buscar uma roupa
export async function buscarRoupa() {
  let url = API_ADDRESS + '/roupa';

  let r = await axios.get(url);
  return r.data;
}