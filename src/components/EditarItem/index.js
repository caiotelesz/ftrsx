import './index.scss';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer'
import { useState } from 'react';
import axios from 'axios';

export default function EditarItem() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [modelo, setModelo] = useState('');
  const [preco, setPreco] = useState('');
  const [cor, setCor] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [material, setMaterial] = useState('');

  const [imagem, setImagem] = useState('');


  async function alterarImagem() {
    let url = 'http://localhost:5000/roupa/imagem/:id';

    let form = new FormData();
    form.append('imagem', imagem);

    let r = await axios.put(url, form, {
      headers : { 'Content-Type' : 'multipart/form-data'}
    })
  }

  return(
    <div className='page-editar'>
        <Cabecalho />
        <div className='container-editar'>
          <div>
            <h2>Nome: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Descrição: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Modelo: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Preço: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Cor: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Tamanho: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Material: </h2>
            <input type='text' />
          </div>

          <button>Editar Imagem</button>
            
          <button>Editar Item</button>
        </div>

    <Footer />
    </div>
  )
}