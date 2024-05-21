import axios from "axios";

import { API_ADDRESS } from "./constant";

export async function alterarImagem(id, img) {
  let url = API_ADDRESS + '/roupa/imagem/' + id;

  let form = new FormData();
  form.append('imagem', img);

  let r = await axios.put(url, form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

  return r.data;
}