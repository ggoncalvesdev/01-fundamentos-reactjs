import { Header } from "./components/header/Header";
import { Post } from "./components/post/Post";
import { Sidebar } from "./components/sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/ggoncalvesdev.png",
        name: "Gabriel Gonçalves",
        role: "Chefe @Neki",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa! 👋" },
        {
          type: "paragraph",
          content:
            " Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-02-03 08:35:20"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/dev-jefferson-souza.png",
        name: "Jefferson Souza",
        role: "Trainee @Neki",
      },
      content: [
        { type: "paragraph", content: "Boa tarde, gente!!" },
        {
          type: "paragraph",
          content:
            "Hoje estou dando início aos meus estudos relacionados a área de cibersegurança.",
        },
        { type: "link", content: "gabriel.repo/ciberseguranca" },
      ],
      publishedAt: new Date("2023-03-18 14:25:11"),
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/pedrowiskutzki.png",
        name: "Pedro Wiskutzki",
        role: "Trainee @Neki",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa! 👋" },
        {
          type: "paragraph",
          content:
            " Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-02-24 09:12:20"),
    },
  ];
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
