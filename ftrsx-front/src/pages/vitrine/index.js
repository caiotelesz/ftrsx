import Box from '../../components/Box';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { useState, useEffect } from 'react';
import * as roupasApi from '../../Api/roupasApi';
import { Link } from 'react-router-dom';

export default function Vitrine() {
  const [listClothes, setListClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchClothes() {
      try {
        const info = await roupasApi.buscarRoupa();
        setListClothes(info);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchClothes();
  }, []);

  

  return (
    <div>
      <Cabecalho />

      <section className='secao2'>
        <img src='/assets/images/frase-recortada.png' alt='frase' />
      </section>

      <section className='secao3'>
        <img src='/assets/images/logo-header.png' alt='frase' />
      </section>

      <section className='secao4'>
        <div>
        {listClothes.map(item => (
          <Link className='navegacao' key={item.id} to={`/visualizacao/${item.id}`}>
            <Box item={item} />
          </Link>
        ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}