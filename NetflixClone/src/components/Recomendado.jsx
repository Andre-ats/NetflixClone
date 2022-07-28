import { Fragment, useState } from "react"
import "./Recomendado.css"

export function Recomendado({item}){

    const anolancamento = new Date(item.first_air_date)
    
    return(
            <div className="recomendado-inteiro" style={{
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundImage:"url(../imagem/strangerthingsbackdrop.jpg)"
            }}>
                <div className="Parte-toda-escrita">
                    <div className="parte-lado-esquerdo">
                        <div className="div-lado-esquerdo-escrita">
                            <h1 className="NameSerie">NETFLIX ORIGINALS</h1>
                            <h1 className="NameSerie">{item.original_name}</h1>
                            <div className="tabela-informativa">
                                <h3 className="NotaVerde">Nota: {item.vote_average}</h3>
                                <h3>{anolancamento.getFullYear()}</h3>
                                <h3>{item.number_of_seasons} Temporadas</h3>
                            </div>
                            <h3 className="overview">{item.overview}</h3>
                            <div className="Botões-principal">
                                <button className="BotãoAssistir">► Assistir</button>
                                <button className="BotãoAdicionarLista">+ Minha Lista</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}