import Style from './Header.module.css'
import ignitelgo from '../../assets/ignitelogo.svg';

console.log(ignitelgo);

export function Header () {
    return (
        <header className={Style.header}>
           <img src= { ignitelgo } alt='logo do ignite'/>
        </header>
    );
}