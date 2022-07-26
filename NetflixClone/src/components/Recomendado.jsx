import { Fragment } from "react"
import "./Recomendado.css"

export function Recomendado({nome, imagem}){
    return(
        <Fragment>
            <h1>{nome}</h1>
            <img src={imagem} />
        </Fragment>
    )
}