import { Avatar } from "../avatar/Avatar";
import { Comment } from "../comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ggoncalvesdev.png" />
          <div className={styles.authorInfo}>
            <strong>Gabriel Gonçalves</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:30">
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          rerum
        </p>
        <p>
          atque voluptatem, dolores omnis ipsam officiis nihil, ab, eius quo
        </p>
        <p>
          <a href="">voluptatum. Aut, doloremque!</a>
        </p>
        <p>
          <a href="">#eveniet.</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
