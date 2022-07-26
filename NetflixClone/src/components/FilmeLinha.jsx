import { Fragment } from "react";
import "./FilmeLinha.css"

export function FilmeLinha({items, title}){
    return(
        <Fragment>
            <div className="Title-div">
                <h2>{title}</h2>
            </div>
            <div className="filme-lista">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="filmes">
                        <img className="imagens-filmes" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}