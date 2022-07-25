import { Fragment } from "react";

export function FilmeLinha({items, title}){
    return(
        <Fragment>
            <h2>{title}</h2>
            <div className="filme-lista">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                ))}
            </div>
        </Fragment>
    )
}