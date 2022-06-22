import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Tmdb from './requisicoes/Tmdb';

import Topo from "./componentes/Topo";
import FilmeDestaque from './componentes/FilmeDestaque';
import Filmes from './componentes/Filmes';

export default function App() {
  //Estado
  const [listaFilmes, setListaFilmes] = useState([]);
  const [conteudoDestaque, setConteudoDestaque] = useState(null);
  const [fundoPreto, setFundoPreto] = useState(false)

  //Logic
  useEffect(() => {
    const loadAll = async () => {
      //Pegar a lista de filmes
      let list = await Tmdb.getHomeList();
      setListaFilmes(list);

      //Pegando o destaque
      let originais = list.filter(item => item.slug === 'originals');
      let escolhaAleatoria = Math.floor(Math.random() * (originais[0].items.results.length - 1));
      let filmeEscolhido = originais[0].items.results[escolhaAleatoria];
      let filmeEscolhidoInfo = await Tmdb.getFilmeInfo(filmeEscolhido.id, "tv");
      setConteudoDestaque(filmeEscolhidoInfo);
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = (e) => {
      if (window.scrollY > 10) {
        setFundoPreto(true)
      } else {
        setFundoPreto(false);
      }     
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    }
  }, [])

  //render
  return (
    <Pagina>
      <Topo fundoPreto={fundoPreto}/>

      {conteudoDestaque ? <FilmeDestaque item={conteudoDestaque}/> : "Carregando..."}

      <Listas>
        {listaFilmes.map((item, index) => {
          return <div key={index}>
            <Filmes title={item.title} index={index} items={item.items} />
          </div>
        })}
      </Listas>

      <Rodape>
        Feito com <span role="img" aria-label='coração'>❤️️</span> por Laycon John<br/>
        Direitos de imagem para Netflix<br/>
        Dados coletados do site Themoviedb.org
      </Rodape>

    </Pagina>
  )
}

const Pagina = styled.div`
  height: 100%;
  box-sizing: border-box;
  background-color: #111;
  color: #fff;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Listas = styled.div`
  margin-top: -150px;
`;

const Rodape = styled.footer`
  margin: 50px 0px;
  text-align: center;
`;