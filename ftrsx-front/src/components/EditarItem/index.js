import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ADDRESS } from '../../Api/constant';
import { useParams, useNavigate } from 'react-router-dom';
import * as roupasApi from "../../Api/roupasApi";

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';

import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function EditarItem() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [modelo, setModelo] = useState('');
  const [preco, setPreco] = useState('');
  const [material, setMaterial] = useState('');
  const [id, setId] = useState('');
  const [imagem, setImagem] = useState(null); 
  const [imgSrc, setImgSrc] = useState(''); 

  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await axios.get(API_ADDRESS + `/roupa/${itemId}`);
        const item = response.data;
        setId(item.id);
        setNome(item.nome);
        setDescricao(item.descricao);
        setModelo(item.modelo);
        setPreco(item.preco);
        setMaterial(item.material);
        setImagem(item.imagem);
        setImgSrc(`${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}`);
      } catch (error) {
        console.error('Erro ao buscar o item:', error);
        alert('Erro ao buscar o item.');
      }
    }

    if (itemId) {
      fetchItem();
    }
  }, [itemId]);

  async function productExist() {
    let info = await roupasApi.salvarProduto(id, nome, descricao, modelo, preco, material, navigate);

    return info;
  }

  async function alterarImagem(e) { 
    if (!id) {
      alert('Salve o produto antes de alterar a imagem.');
      return;
    }

    const file = e.target.files[0]; 
    const url = API_ADDRESS + `/roupa/imagem/${id}`;

    const form = new FormData();
    form.append('imagem', file);

    try {
      await axios.put(url, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Imagem alterada com sucesso.');
      setImgSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error('Erro ao alterar a imagem:', error);
      alert('Erro ao alterar a imagem.');
    }
  }

  async function removeProduct() {
    let info = await roupasApi.removerProduto(id, navigate);

    return info;
  }
  
  return (
    <div className="page-editar">
      <Cabecalho />

      <div className="container-editar">
        <div className="primeiraCaixa">
          <div>
            <h2>Nome: </h2>
            <input
              placeholder="Nome do produto"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <h2>Preço: </h2>
            <input
              placeholder="Preço do produto"
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          
          <div>
            <h2>Material: </h2>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="">Selecione um material</option>
              <option value="Algodão">Algodão</option>
              <option value="Denim">Denim</option>
              <option value="Lã">Lã</option>
              <option value="Moletom">Moletom</option>
            </select>
          </div>
          <div>
            <h2>Descrição: </h2>
            <textarea
              placeholder="Descrição do produto"
              className="msg-desc"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </div>

        <div className="segunda-caixa">
          <div>
            {<img src={imgSrc} alt="camiseta" className="img-preview" />}
            <label htmlFor="imagem">Alterar Imagem</label>
            <input
              type="file"
              id="imagem"
              style={{ display: "none" }}
              onChange={alterarImagem}
            />
          </div>

          <div className='icons-edit'>
            <FontAwesomeIcon icon={faPenToSquare} onClick={productExist} className="custom-Icon"/>
            <FontAwesomeIcon icon={faTrash} onClick={removeProduct} className="custom-Icon"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
