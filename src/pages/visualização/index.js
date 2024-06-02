import './index.scss';
import Cabecalho from '../../components/Cabacalho';
import BoxVisualizacao from '../../components/BoxVisualizacao';
import { useState, useEffect } from 'react';
import * as roupasApi from '../../Api/roupasApi';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

export default function Visualizacao() {
  const [listClothes, setListClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    async function fetchClothes() {
      try {
        const info = await roupasApi.buscarRoupa();
        setListClothes(info);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchClothes();
  }, []);

  const itemSelecionado = listClothes.find(item => item.id === parseInt(itemId));

  if (!itemSelecionado) {
    return <div>Item não encontrado</div>;
  }

  return (
    <div>
      <Cabecalho />

      <section className='box-visu'>
        <BoxVisualizacao key={itemSelecionado.id} item={itemSelecionado} />
      </section>

      <Footer />
    </div>
  );
}