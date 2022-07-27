/*Importando Funcionalidades React*/
import { useState ,useEffect, Component } from "react"

/*Importando API do arquivo Api.js*/
import Api from "./Api"

/*Import Components*/
import { FilmeLinha } from "./components/FilmeLinha"
import { Recomendado } from "./components/Recomendado"

/*Importando CSS*/
import "./App.css"

function App(){
  /*Atributos React*/
  const [filmes, setFilmes] = useState([])
  const [nomeSerie, setNomeSerie] = useState(null)
  const [imagem, setImagem] = useState(null)
  const [overview, setOverview] = useState(null)
  const [season, setSeason] = useState(null)
  const [datalancamento, setDataLancamento] = useState(null)
  const [notadofilme, setNotaDoFilmes] = useState(null)

  useEffect(()=>{
  async function Carregar(){
    let list = await Api.getList()
    setFilmes(list)

    /*Lógica para pegar um filme qualquer*/
    let escolhainfo = await Api.getMovieInfo(66732, 'tv')

    setNomeSerie(escolhainfo.name)
    setImagem(escolhainfo.poster_path)
    setOverview(escolhainfo.overview)
    setSeason(escolhainfo.number_of_seasons)
    setDataLancamento(escolhainfo.first_air_date)
    setNotaDoFilmes(escolhainfo.vote_average)

  }
  Carregar()
  }, [])

  /*Página toda*/
  return(
    <div className="PaginaToda">
      {/*Parte Header*/}
      {/*Parte Recomendado*/}
      <Recomendado nome={nomeSerie} imagem={`https://image.tmdb.org/t/p/${imagem}`} overview={overview} season={season} datalancamento={datalancamento} nota={notadofilme}/>
      {/*Parte lista*/}
      <div className="Lista">
        {filmes.map((item, key) =>(
          <FilmeLinha key={key} title={item.title} items={item.items}/>
        ))}
      </div>
    </div>
  )
}
export default App