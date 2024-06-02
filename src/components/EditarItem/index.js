import './index.scss';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ADDRESS } from '../../Api/constant';
import { useParams } from 'react-router-dom';

export default function EditarItem() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [modelo, setModelo] = useState('');
  const [preco, setPreco] = useState('');
  const [cor, setCor] = useState('');
  const [material, setMaterial] = useState('');
  const [id, setId] = useState('');
  const [imagem, setImagem] = useState('');

  const { itemId } = useParams();

  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await axios.get(`http://localhost:5000/roupa/${itemId}`);
        const item = response.data;
        setId(item.id);
        setNome(item.nome);
        setDescricao(item.descricao);
        setModelo(item.modelo);
        setPreco(item.preco);
        setCor(item.cor);
        setMaterial(item.material);
        setImagem(item.imagem);
      } catch (error) {
        console.error('Erro ao buscar o item:', error);
        alert('Erro ao buscar o item.');
      }
    }

    if (itemId) {
      fetchItem();
    }
  }, [itemId]);

  const imgSrc = imagem ? `${API_ADDRESS}/${imagem.replace(/\\/g, '/')}` : 'assets/images/pecas/teeblack.png';

  async function salvarProduto() {
    const url = `http://localhost:5000/roupa/${id ? id : ''}`;
    const corpo = {
      nome,
      descricao,
      modelo,
      preco,
      cor,
      material
    };

    try {
      if (id) {
        await axios.put(url, corpo);
        alert('Produto alterado com sucesso.');
      } else {
        const response = await axios.post(url, corpo);
        alert('Produto inserido com ID: ' + response.data.id);
      }
    } catch (error) {
      console.error('Erro ao salvar o produto:', error);
      alert('Erro ao salvar o produto.');
    }

    resetForm();
  }

  async function alterarImagem() {
    if (!id) {
      alert('Salve o produto antes de alterar a imagem.');
      return;
    }

    const url = `http://localhost:5000/roupa/imagem/${id}`;

    const form = new FormData();
    form.append('imagem', imagem);

    try {
      await axios.put(url, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Imagem alterada com sucesso.');
    } catch (error) {
      console.error('Erro ao alterar a imagem:', error);
      alert('Erro ao alterar a imagem.');
    }
  }

  async function removerProduto() {
    if (!id) {
      alert('Selecione um produto para remover.');
      return;
    }

    const url = `http://localhost:5000/roupa/${id}`;

    try {
      await axios.delete(url);
      alert('Produto removido com sucesso.');
      resetForm();
    } catch (error) {
      console.error('Erro ao remover o produto:', error);
      alert('Erro ao remover o produto.');
    }
  }

  function resetForm() {
    setId('');
    setNome('');
    setDescricao('');
    setModelo('');
    setPreco('');
    setCor('');
    setMaterial('');
    setImagem('');
  }

  return (
    <div className='page-editar'>
      <Cabecalho />
      <div className='container-editar'>
        <img src={imgSrc} alt='camiseta' />
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
        <input type='file' onChange={e => setImagem(e.target.files[0])} />
        <button className='updImg' onClick={alterarImagem}>Editar Imagem</button>
        <button onClick={salvarProduto}>Salvar Produto</button>
        <button onClick={removerProduto}>Remover Produto</button>
      </div>
      <Footer />
    </div>
  );
}
