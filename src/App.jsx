
import { Header } from './components/Header/Header';
import { Post } from './Post';
import { Sidebar } from './components/SideBar/Sidebar';

import './global.css' /* css global*/
import styles from './App.module.css' /* css escopado*/;


export function App() {

  return (
    /* o retorno com mais de um item precisa de um elemnto para a contenção*/
   <div> 
    
      <Header /> 
      <div className={styles.wrapper} /* utilzação do css escopado*/> 
      <Sidebar />
      <main>
          <Post /* Função "Post" --> Post.Jsx - Usa a estrutura crianda nesse arquivo*/
                author="Gustavo Medeiros" /* parâmetros da função "Post"*/
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iusto sapiente, quae nisi quis accusamus soluta officiis ullam hic nostrum eligendi quasi animi voluptates quo vitae! Minus recusandae quas soluta.
                "
          />
          <Post 
            author="Gabriel Fernandes" 
            content="oi jhfjhjfh dolor sit amet oi adipisicing elit. Voluptate, iusto sapiente, quae nisi quis accusamus soluta officiis ullam hic nostrum eligendi quasi animi voluptates quo vitae! Minus recusandae quas soluta."
          />
      </main>
      </div>

    </div>
  )
}

