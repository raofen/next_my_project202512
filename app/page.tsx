// app/page.tsx
import styles from "./page.module.css";
import Image from "next/image";
import NewsList from "./_components/NewsList/index.module";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_lib/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "東京本社移転のお知らせ",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/11/10",
      createdAt: "2025/11/10",
    },
    {
      id: "2",
      title: "当社CEOがForbsの表紙を飾りました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/11/1",
      createdAt: "2025/11/1",
    },
    {
      id: "3",
      title: "やっほー、お元気？",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/10/1",
      createdAt: "2025/10/1",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです</p>
        </div>
        <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
