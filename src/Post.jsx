
/* criação do componente Post */

export function Post (props) {
    console.log (props)
    //retorno aqui passa ser própria funão
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

