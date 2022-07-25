/*Api chave de acesso*/
const API_KEY = 'beca3d80eb2d7560c4d1b97218e29404'
/*Link do site que irá puxar a API*/
const API_BASE = 'https://api.themoviedb.org/3'

/*Função para buscar os itens da Api*/
async function BuscaDeDados(endereço){
    const req = await fetch(`${API_BASE}${endereço}`)
    const json = await req.json()
    return json
} 

/*Objeto que armazena as informações da API*/
export default{
    getList: async () => {
        return[
            {
                slug:'originals',
                title:'Originais Da Netflix',
                items: await BuscaDeDados(`/discover/tv?with_network=213&language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                items: await BuscaDeDados(`/trending/all/week?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: await BuscaDeDados(`/movie/top_rated?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await BuscaDeDados(`/discover/movie?with_genres=28?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                items: await BuscaDeDados(`/discover/movie?with_genres=35?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await BuscaDeDados(`/discover/movie?with_genres=27?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items: await BuscaDeDados(`/discover/movie?with_genres=10749?language=pt-BRapi_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:'Documentários',
                items: await BuscaDeDados(`/discover/movie?with_genres=99?language=pt-BRapi_key=${API_KEY}`)
            },
        ]
    }
}