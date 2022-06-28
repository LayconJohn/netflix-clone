import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function Filmes({title, items}) {
    //Estado
    const [rolagemX, setRolagemX] = useState(-400)

    //logic
    function rolarEsquerda(){
        let x = rolagemX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setRolagemX(x); 
    }

    function rolarDireita(){
        let x = rolagemX - Math.round(window.innerWidth / 2);
        let larguraLista = items.results.length * 150;
        if (window.innerWidth - larguraLista > x) {
            x = (window.innerWidth - larguraLista) - 60 //menos o padding na lateral
        }
        setRolagemX(x);
    }

    //render
    return (
        <ListaFilmesGenero>
            <Texto>{title}</Texto>
            <SetaEsquerda onClick={rolarEsquerda}>
                <MdNavigateBefore />
            </SetaEsquerda>
            <SetaDireita onClick={rolarDireita}>
                <MdNavigateNext />
            </SetaDireita>
            
            <Cards>
                <CardsRow rolagemX={`${rolagemX}px`} tamanhoLista={`${items.results.length * 150}px`}>
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
    
    div:hover {
        opacity: 1;
    }
`;

const SetaEsquerda = styled.div`
    font-size: 50px;
    position: absolute;
    width: 40px;
    height: 225px;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    &:hover {
        opacity: 1;
    }
`;

const SetaDireita = styled.div`
    font-size: 50px;
    position: absolute;
    width: 40px;
    height: 225px;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    &:hover {
        opacity: 1;
    }
`;

const Cards = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

const CardsRow = styled.div`
    width: ${props => props.tamanhoLista};
    margin-left: ${props => props.rolagemX};
    transition: all ease 0.5s;
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