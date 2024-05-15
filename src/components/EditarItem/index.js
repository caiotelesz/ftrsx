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

  const [id, setId] = useState('');
  const [imagem, setImagem] = useState('');


  async function salvarProduto() {
    let url = 'http://localhost5000/roupa/';

    let corpo = {
      "nome": nome,
      "descricao": descricao,
      "modelo": modelo,
      "preco": preco,
      "cor": cor,
      "tamanho": tamanho,
      "material": material
    }

    if(id == '') {
      let r = await axios.post(url, corpo);
      let info = r.data;

      alert('produto inserido com ID: ' + info.id);
    } else {
      let r = await axios.post(url + id, corpo);
      alert('produto alterado com sucesso.');
    }

    setId('');
    setNome('');
    setDescricao('');
    setModelo('');
    setPreco('');
    setCor('');
    setTamanho('');
    setMaterial('');
    setImagem('');
  }

  async function editarProduto(produto) {
    setNome(produto.nome);
    setDescricao(produto.descricao);
    setModelo(produto.modelo);
    setPreco(produto.preco);
    setCor(produto.cor);
    setTamanho(produto.tamanho);
    setMaterial(produto.material);

  }

  async function  removerProduto(produto) {
    let url = 'http://localhost:5000/roupa/';

    let r = await axios.delete(url + produto.id);
    alert ('produto removido com sucesso');
  }

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
            <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
          </div>
          <div>
            <h2>Descrição: </h2>
            <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)}/>
          </div>
          <div>
            <h2>Preço: </h2>
            <input type='text' value={preco} onChange={e => setPreco(e.target.value)}/>
          </div>
          <div>
            <h2>Tamanho: </h2>
            <input type='text' value={tamanho} onChange={e => setTamanho(e.target.value)}/>
          </div>
          <div>
            <h2>Material: </h2>
            <input type='text' value={material} onChange={e => setMaterial(e.target.value)}/>
          </div>
          
          
          <input type='file' onChange={e => setImagem(e.target.files[0])} />
          <button className='updImg' onClick={alterarImagem}>Editar Imagem</button>
            
          

          <button onClick={() => editarProduto()}>Editar Item</button>


          <button onClick={() => removerProduto()}> Remover Item </button>
        </div>

    <Footer />
    </div>
  )
}