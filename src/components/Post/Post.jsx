import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Comment'
import style from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import  ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';


//estado = variáveis que eu quero que o react mude


export function Post ({author, publishedAt, content}) {

const [comments, setComments] = useState ([
    "post muito bacana!"
])

const [NewCommentText, setNewCommentText] = useState ('')

const dateformatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm 'hs'", { locale: ptBR });
const publishedDatetoNow = formatDistanceToNow (publishedAt, { locale: ptBR, addSuffix: true}, )  

function handleCreateNewComment() {
    
    event.preventDefault();


    setComments([...comments, NewCommentText]);
    setNewCommentText('')
   
}

function handleNewCommentChange () {
    setNewCommentText(event.target.value);
   
}


return (
       <article className={style.post}>
            
            <header>
                <div className={style.author}>


                    <Avatar 
                    hasBorder={true}
                    src={ author.avatarUrl}
                    />
                    <div className={style.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={dateformatted} dateTime={publishedAt.toISOString()}>{publishedDatetoNow}</time>
            </header>



            <div className={style.content}>
                {content.map(line => {
                        if (line.type === "paragraph") {
                            return <p>{line.content}</p>
                        } else if (line.type === "link"){
                            return <p><a href="#">{line.content}</a></p>
                        }
                  
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentform}>
                <strong> Deixe seu feedback </strong>
                <textarea
                name='comment' 
                placeholder='Deixe seu comentário'
                value={NewCommentText}
                onChange={handleNewCommentChange}
                />
               <footer>
                    <button type="submit">Comentar</button>
                </footer> 
            </form>

            <div className={style.commentList}>
          
                {comments.map(comment => {
                    return (
                        <Comment content={comment}
                        />
                    )
                })}

            </div>
           

       </article>
    )
}