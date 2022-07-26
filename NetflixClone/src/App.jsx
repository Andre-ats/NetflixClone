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

  useEffect(()=>{
  async function Carregar(){
    let list = await Api.getList()
    setFilmes(list)

    /*Lógica para pegar um filme qualquer*/
    let originals = list.filter(i=>i.slug === 'originals')
    let randomNumber = Math.floor(Math.random()*(originals[0].items.results.length - 1))
    let escolha = originals[0].items.results[randomNumber]
    let escolhainfo = await Api.getMovieInfo(escolha.id, 'tv')

    setNomeSerie(escolhainfo.name)
    setImagem(escolhainfo.poster_path)

  }
  Carregar()
  }, [])

  /*Página toda*/
  return(
    <div className="PaginaToda">
      {/*Parte Header*/}
      {/*Parte Recomendado*/}
      <Recomendado nome={nomeSerie} imagem={`https://image.tmdb.org/t/p/w300${imagem}`}/>
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