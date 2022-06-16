import styled from 'styled-components';

export default function Filmes({title, items}) {
    return (
        <div>
            <Texto>{title}</Texto>
            <Cards>
                {items.results.lenght === 0 ? "Carregando..." : items.results.map((filme, index) => {
                    return <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} key={index} />
                })}
            </Cards>
        </div>
    )
}

const ListaFilmesGenero = styled.div`
    background-color: gray;
`;

const Cards = styled.div`
    display: flex;
    overflow-x: scroll;
`;

const Imagem = styled.img`
    width: 300px;
    height: 300px;
`;

const Texto = styled.h2`
  font-size: 22px;
  color: blue;
`