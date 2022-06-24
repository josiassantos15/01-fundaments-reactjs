// JSX = Javascript + xml
import { Header } from './components/Header'
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            <Post 
              author="Josias Santos" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magni quasi possimus sed esse dolorum explicabo laudantium impedit autem amet nemo dolores aut. Assumenda atque voluptate nihil, necessitatibus odio at."  
            />
          </main>
        </div>
    </div>
  )
}
