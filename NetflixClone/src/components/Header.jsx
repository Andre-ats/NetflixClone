import "./Header.css"

export function Header({background}){
    return(
        <header className={background ? "blackcolor" : ''}>
            <img style={{width:"150px"}} src="../imagem/netflixEscrita.png"/>
            <img style={{width:"45px", height:"50px "}} src="../imagem/Netflix-avatar.png"/>
        </header>
    )
}