/*Importando Funcionalidades React*/
import { useState ,useEffect, Component } from "react"

/*Importando API do arquivo Api.js*/
import Api from "./Api"

/*Import Components*/
import { FilmeLinha } from "./components/FilmeLinha"
import { Recomendado } from "./components/Recomendado"
import { Header } from "./components/Header"

/*Importando CSS*/
import "./App.css"

function App(){
  /*Atributos React*/
  const [filmes, setFilmes] = useState([])
  const [infos, setInfos] = useState([])
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
  async function Carregar(){
    let list = await Api.getList()
    setFilmes(list)

    /*Lógica para pegar um filme qualquer*/
    let escolhainfo = await Api.getMovieInfo(66732, 'tv')
    setInfos(escolhainfo)

  }
  Carregar()
  }, [])

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener("scroll", scrollListener)
    return() =>{
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  /*Página toda*/
  return(
    <div className="PaginaToda">
      {/*Parte Header*/}
      <Header background={blackHeader} />
      {/*Parte Recomendado*/}
      {infos && 
        <Recomendado item={infos}/>
      }
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