import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Tmdb from './requisicoes/Tmdb';

import Filmes from './componentes/Filmes';

export default function App() {
  //Estado
  const [listaFilmes, setListaFilmes] = useState([]);

  //Logic
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setListaFilmes(list);
    }
    loadAll();
  }, [])

  //render
  return (
    <>
      {listaFilmes.map((item, index) => {
        return <div key={index}>
          <Filmes title={item.title} index={index} items={item.items} />
        </div>
      })}
    </>
  )
}

const Header = styled.header``;

const Pagina = styled.div`
  background-color: gray;
`;

const Destaque = styled.div``;

const Rodape = styled.div``;