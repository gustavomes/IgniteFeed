import style from './Avatar.module.css';

export function Avatar ({hasBorder = true, src}) { // desistruturação das props, buscando os atributos desejados
        return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar} /* if ternário para aplicação de estilização condicional*/ 
        src={src} //aqui é possível usar a prop diretamente sem a palavra "props"
        />
    )

}
