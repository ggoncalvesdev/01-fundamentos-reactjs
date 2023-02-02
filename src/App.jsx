import { Header } from "./components/header/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore fuga reprehenderit laudantium soluta, assumenda aspernatur odio repellendus minus repudiandae dolore cumque, accusamus, ipsum nemo voluptatum? Architecto ratione modi ab!"
          />
          <Post
            author="Gabriel Gonçalves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore fuga reprehenderit laudantium soluta, assumenda aspernatur odio repellendus minus repudiandae dolore cumque, accusamus, ipsum nemo voluptatum? Architecto ratione modi ab!"
          />
        </main>
      </div>
    </div>
  );
}
