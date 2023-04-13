
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/SideBar/Sidebar';


import './global.css' /* css global*/
import styles from './App.module.css' /* css escopado*/;

//  author: { avatar_url: "", name: "", role: "" }
// publishedAt: date
// content: String

const posts = [
  {
    id: 1,
    author: { avatarUrl: "https://avatars.githubusercontent.com/u/61232100?v=4", 
    name: "Gustavo Souza", 
    role: "Photo" },

    content: [
      {type: 'paragraph', content: 'teste'},
      {type: 'paragraph', content: 'oidodo odidoiopdioidodi'},
      {type: 'paragraph', content: 'ytetygbshgsg'},
      {type: 'link', content: 'jane.desing/doctors'}
    ],

      publishedAt: new Date ('2020-01-01T00:00:00.000Z')
  
  },
  {
    id: 2,
    author: { avatarUrl: "https://github.com/maykbrito.png", 
    name: "Outro nome", 
    role: "Photo2" },

    content: [
      {type: 'paragraph', content: 'teste3'},
      {type: 'paragraph', content: 'oidodo odidoiopdioidodi3'},
      {type: 'paragraph', content: 'ytetygbshgsg3'},
      {type: 'link', content: 'jane.desing/doctors3'}
    ],

      publishedAt: new Date ('2020-01-01 00:00:00')
  
  },
];


export function App() {

  return (
    /* o retorno com mais de um item precisa de um elemnto para a contenção*/
   <div> 
    
      <Header /> 
      <div className={styles.wrapper} /* utilzação do css escopado*/> 
      <Sidebar />
      <main>
         
    {posts.map(post => {
      return (
        <Post 
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        
        />

      )

    })}
      
      </main>
      </div>

    </div>
  )
}

