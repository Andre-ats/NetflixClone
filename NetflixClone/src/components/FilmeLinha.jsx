import { Fragment, useState } from "react";
import "./FilmeLinha.css"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export function FilmeLinha({items, title}){
    const [scrollX, setScrollX] = useState(30)
    const [tela, setTela] = useState(false)

    function HandleLeftArrow(){
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 30){
            x = 30
        }
        setScrollX(x)
    }
    function HandleRightArrow(){
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 199
        if ((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }
    function abrirTela(){
        setTela(true)
    }

    return(
        <Fragment>
            <div className="linhatoda">
                <div className="Title-div">
                    <h2>{title}</h2>
                </div>
                    <div className="moverparaesquerda" onClick={HandleLeftArrow}>
                        <NavigateBeforeIcon />
                    </div>
                    <div className="moverparadireita" onClick={HandleRightArrow}>
                        <NavigateNextIcon />
                    </div>
                <div className="filme-lista" style={{
                    marginLeft: scrollX
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="filmes">
                            <img onClick={abrirTela} className="imagens-filmes" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}