import BoxVerificacao from "../../components/BoxVerificacao";

import Cabecalho from "../../components/Cabacalho";
import Footer from "../../components/Footer";
import * as roupasApi from "../../Api/roupasApi";

import "./index.scss";
import { useState, useEffect } from "react";

export default function VerificarItens() {
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

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }
  return (
    <div>
      <Cabecalho />

      <section className="secaoVerificacao">
        <div>
          {listClothes.map((item) => (
            <BoxVerificacao key={item.id} item={item} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
