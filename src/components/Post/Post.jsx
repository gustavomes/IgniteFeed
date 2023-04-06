import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Comment'
import style from './Post.module.css'

export function Post (props) {
    return (
       <article className={style.post}>
            
            <header>
                <div className={style.author}>


                    <Avatar 
                    hasBorder={true}
                    src="https://avatars.githubusercontent.com/u/61232100?v=4" 
                    />
                    <div className={style.authorinfo}>
                        <strong>{ props.author }</strong>
                        <span>{ props.info }</span>
                    </div>
                </div>
                <time title='06 de abril as 08:41' dateTime='2023-04-06 8:41:13'>publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p> { props.content }</p>
            </div>

            <form className={style.commentform}>
                <strong> Deixe seu feedback </strong>
                <textarea 
                placeholder='Deixe seu comentário'
                />
               <footer>
                    <button type="submit">Comentar</button>
                </footer> 
            </form>

            <div className={style.commentList}>
            <Comment />
            <Comment />
            <Comment />
            </div>
           

       </article>
    )
}