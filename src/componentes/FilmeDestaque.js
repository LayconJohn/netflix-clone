import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

export default function FilmeDestaque({item}) {

    const [data, setData] = useState(new Date(item.first_air_date));
    const [generos, setGeneros] = useState([]); 

    useEffect(() => {
        item.genres.map((valor, index) => {
            setGeneros([...generos, valor.name]);
        })
    }, [])


    return (
        <Destaque item={`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}>
            
            <DestaqueVertical>
                <DestaqueHorizontal>
                    <DestaqueNome>{item.original_name}</DestaqueNome>
                    <DestaqueInfo>
                        <DestaquePontos>{item.vote_average}</DestaquePontos>
                        <DestaqueAno>{data.getFullYear()}</DestaqueAno>
                        <DestaqueTemporadas>{item.number_of_seasons} {item.number_of_seasons === 1 ? "Temporada" : "Temporadas"}</DestaqueTemporadas>
                    </DestaqueInfo>
                    <DestaqueDescricao>
                        {item.overview}
                    </DestaqueDescricao>
                    <Botoes>
                        <BotaoAssistir><BsFillPlayFill /> Assistir</BotaoAssistir>
                        <BotaoMinhaLista>+ Minha Lista</BotaoMinhaLista>
                    </Botoes>
                    <DestaqueGeneros>
                        <strong>Gêneros: </strong> {generos.join(", ")}
                    </DestaqueGeneros>
                </DestaqueHorizontal>
            </DestaqueVertical>
        </Destaque>
    )
}

const Destaque = styled.section`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => props.item};
`;

const DestaqueVertical = styled.div`
    height: inherit;
    width: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

const DestaqueHorizontal = styled.div`
    height: inherit;
    width: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0px 150px 30px;
`;

const DestaqueNome = styled.div`
    font-size: 60px;
    font-weight: bold;
`;

const DestaqueInfo = styled.div`
    display: flex;
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`;

const DestaquePontos = styled.div`
    color: #46d369;
    margin-right: 15px;
`;

const DestaqueAno = styled.div`
    margin-right: 15px;
`;

const DestaqueTemporadas = styled.div``;

const DestaqueDescricao = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #9999;
    max-width: 40%;
`;

const Botoes = styled.div`
    display: flex;
    margin-top: 15px;
    max-width: 25%;

    div {
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2s;
        cursor: pointer;
    }

    div:hover {
        opacity: 0.7;
    }
`;

const BotaoAssistir = styled.div`
    background-color: #fff;
    color: #000;
`;

const BotaoMinhaLista = styled.div`
    background-color: #333;
    color: #FFF;
`;

const DestaqueGeneros = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: #999;
`;
