/*Importando Funcionalidades React*/
import { useState ,useEffect } from "react"

/*Importando API do arquivo Api.js*/
import Api from "./Api"

/*Import Components*/
import { FilmeLinha } from "./components/FilmeLinha"

function App(){
  /*Atributos React*/
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
  async function Carregar(){
    let list = await Api.getList()
    setFilmes(list)
  }
  Carregar()
  }, [])

  /*Página toda*/
  return(
    <div className="PaginaToda">
      {/*Parte Header*/}
      {/*Parte Recomendado*/}
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