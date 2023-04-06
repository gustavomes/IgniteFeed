import { ThumbsUp, Trash } from 'phosphor-react'; /* biblioteca de ícones Phosphor icons */
import { Avatar } from '../Avatar/Avatar';
import style from './Comment.module.css';

export function Comment (){
    return (
    <article className={style.comment} >
           
        <Avatar 
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/61232100?v=4" 
        />
         <div className={style.CommentBox}>
            
            <div className={style.commentContent}>
                <header className={style.commentHeader}>
                        <div className={style.authorinfo}>
                        <strong>Devon lane</strong>
                        <time title='06 de abril as 08:41' dateTime='2023-04-06 8:41:13'>cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Coment'>
                        <Trash className={style.trash} size={24} />
                        </button>
                </header>
              
                <p>Muito bom Devon, parabéns!! 👏👏</p>
                 
            </div>
            
         
            <footer className={style.curtir}>
                <button>
                <ThumbsUp size={20} />
                Aplaudir
                <span> 20 </span>
                </button>

             
            </footer>

         </div>  
    </article>
    )

}