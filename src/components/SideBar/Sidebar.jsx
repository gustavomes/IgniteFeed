import { PencilSimpleLine } from 'phosphor-react'; /* biblioteca de ícones Phosphor icons */
import style from './Sidebar.module.css';
import capaaside from '../../assets/capaaside.jpg';

/* criação do componente Side Bar */

export function Sidebar () {
    return (

        <aside className={style.sidebar}>
            <img className={style.cover} src={ capaaside } />
            <div className={style.profile}> 
                <img className={style.avatar} src="https://avatars.githubusercontent.com/u/61232100?v=4" alt="" />
                <strong> Gustavo Medeiros </strong>
                <span> Web Developer</span>

               <footer>
                    
                    <a href='#'> 
                    <PencilSimpleLine size={20}/> 
                    Editar seu Peril
                    </a>
               </footer> 
            </div>
        </aside>
    )


}