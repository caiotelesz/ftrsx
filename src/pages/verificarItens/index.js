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

  // Hook useEffect para buscar as roupas assim que o componente for montado
  useEffect(() => {
    async function fetchClothes() {
      try {
        // Chama a API para buscar as roupas
        const info = await roupasApi.buscarRoupa();
        // Atualiza o estado com as roupas retornadas
        setListClothes(info);
      } catch (err) {
        // Se houver erro, atualiza o estado do erro
        setError(err.message);
      } finally {
        // Define o carregamento como false após a conclusão da busca (com sucesso ou erro)
        setLoading(false);
      }
    }

    fetchClothes();
  }, []);

  // Renderiza uma mensagem de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Renderiza uma mensagem de erro, se houver um
  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <Cabecalho />

      <section className="secaoVerificacao">
        <div>
          {/* Mapeia cada item da lista de roupas e renderiza um componente BoxVerificacao para cada um */}
          {listClothes.map((item) => (
            <BoxVerificacao key={item.id} item={item} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
