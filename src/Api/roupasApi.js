import axios from "axios";
import { toast } from 'react-toastify';

import { API_ADDRESS } from "./constant";

export async function adicionarRoupa(corp) {
  let url = API_ADDRESS + '/roupa';

  let r = await axios.post(url, corp);
  return r.data;
}

export async function alterarRoupa(id, corp) {
  let url = API_ADDRESS + '/roupa/' + id;

  let r = await axios.put(url, corp);
  return r.data;
}

export async function alterarImagem(id, img) {
  let url = API_ADDRESS + '/roupa/imagem/' + id;

  let form = new FormData();
  form.append('imagem', img);

  let r = await axios.put(url, form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

  return r.data;
}


//// export async function removerProduto(id) {
////   confirmAlert({
////     title: 'Remover Produto',
////     message: 'Tem certeza que vai remover o produto?',
////     buttons: [
////       {
////         label: 'Sim',
////         onClick: async () => {
////           let r = await roupasApi.removerProduto(produto.id);
////           toast.dark('✅ Aluno removido com sucesso.');
////         }
////       },
////       { label: 'Não'}
////     ]
////   })


