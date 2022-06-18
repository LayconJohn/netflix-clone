import styled from 'styled-components';

export default function Filmes({title, items}) {
    return (
        <ListaFilmesGenero>
            <Texto>{title}</Texto>
            <Cards>
                <CardsRow>
                    {items.results.lenght === 0 ? "Carregando..." : items.results.map((filme, index) => {
                        return <Card>
                            <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt ={filme.originnal_title} key={index} />
                        </Card>
                    })}
                </CardsRow>
            </Cards>
        </ListaFilmesGenero>
    )
}

const ListaFilmesGenero = styled.div`
    margin-bottom: 30px;
`;

const Cards = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

const CardsRow = styled.div`
    width: 99999999px;
`; 

const Card = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;

    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }
`;

const Imagem = styled.img`
    width: 300px;
    height: 300px;
`;
 
const Texto = styled.h2`
  font-size: 22px;
  color: #FFF;
  margin: 0px 0px 0px 30px;
`