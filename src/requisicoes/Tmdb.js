import axios from "axios";

const API_KEY = '7a85767249101a003767d6ee4f24b09c';
const API_BASE_URL = 'http://api.themoviedb.org/3';

/*
- Originais netflix
- Recomendados (trending)
- Em alta (Top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários
*/

const basicFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

/*function basicFecth(endpoint) {
    const promisse = axios.get(`${API_BASE_URL}${endpoint}`)
    promisse.then((response) => {
        return response.data
    })
}*/

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: "Em alta",
                items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: "Ação",
                items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: "Comédia",
                items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: "Terror",
                items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            }, 
            {
                slug: 'romance',
                title: "Romance",
                items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: "Documentário",
                items: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    },
    getFilmeInfo: async(filmeId, tipoFilme) => {
        let info = {};

        if (filmeId) {
            switch(tipoFilme) {
                case 'movie':
                    info = await basicFecth(`/movie/${filmeId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basicFecth(`/tv/${filmeId}?language=pt-BR&api_key=${API_KEY}`);
                break;
            }
        }

        return info;
    }
}