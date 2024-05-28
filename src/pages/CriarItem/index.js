import './index.scss';

import { toast } from 'react-toastify'

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer'
import { useState } from 'react';

import * as roupasApi from '../../Api/roupasApi'

/* 
<input type="file" accept="image, text" name="file" onChange={e=>setImage(e.target.files[0])} />
<button>atualizar</button> 
*/
export default function CriarItem() {

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [material, setMaterial] = useState('');
  const [imgRoupa, setImgRoupa] = useState('');

  async function adicionarRoupa() {

    let corp = {
      "nome": nome,
      "desc": descricao,
      "preco": preco,
      "tam": tamanho,
      "mat": material,
      "img": imgRoupa
    }

    if (id == '') {
      let info = await roupasApi.adicionarRoupa(corp);
      toast.success('Roupa adicionada em: ' + info.id);
    }

    limparCampos();
  }

  function limparCampos() {
    setId('');
    setNome('');
    setDescricao('');
    setPreco('');
    setTamanho('');
    setMaterial('');
    setImgRoupa('');
  }


  return(
    
    <div className='page-criar'>
      <Cabecalho />

        <div className='container-criar'>
          <div className='primeiraCaixa'>   
          <div>
            <h2>Nome: </h2>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <h2>Descrição: </h2>
            <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)} />
          </div>
          <div>
            <h2>Preço: </h2>
            <input type='text' value={preco} onChange={e => setPreco(e.target.value)} />
          </div>
          <div>
            <h2>Tamanho: </h2>
            <input type='text' value={tamanho} onChange={e => setTamanho(e.target.value)} />
          </div>
          <div>
            <h2>Material: </h2>
            <input type='text' value={material} onChange={e => setMaterial(e.target.value)} />
          </div>
          </div>

          <div className='segunda-caixa'>
            <label htmlFor="imagemInput">Alterar Imagem</label>
            <input type="file" id="imagemInput" style={{display: 'none'}} value={imgRoupa} onChange={e => setImgRoupa(e.target.files[0])} />
            <button onClick={adicionarRoupa}>
              Adicionar roupa
            </button>
          </div>

        </div>
      <Footer />
    </div>
  )
}