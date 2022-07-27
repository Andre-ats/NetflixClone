import { Fragment } from "react"
import "./Recomendado.css"

export function Recomendado({nome, imagem, overview, season, datalancamento, nota}){

    const anolancamento = new Date(datalancamento)

    return(
            <div className="recomendado-inteiro" style={{
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundImage:{imagem}
            }}>
                <div className="Parte-Escrita">
                    <h1>NETFLIX ORIGINALS</h1>
                    <h1>{nome}</h1>
                    <div className="tabela-informativa">
                        <h3>Nota: {nota}</h3>
                        <h3>{anolancamento.getFullYear()}</h3>
                        <h3>{season} Temporadas</h3>
                    </div>
                    <h3>{overview}</h3>
                </div>
                <div className="parte-imagem">
                    <img src={imagem} alt="" />
                </div>
            </div>
    )
}