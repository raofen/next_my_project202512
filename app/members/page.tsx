// members/page.tsx
import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "ブライアン・ロバーツ",
      position: "社長",
      profile: "こんにちは、この会社の社長だじょw",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "ナンシー・ビッグフット",
      position: "副社長",
      profile: "ハーイ！私が副社長・ナンシーよ！よろしくね！",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "トマソン・モリソン",
      position: "営業部長",
      profile: "営業の道は一日してならず、今日も笑顔のトマソンです！",
    },
  ],
};

export default function Page() {
  return (
    <>
      <div className={styles.contain}>
        {data.contents.length === 0 ? (
          <p className={styles.empty}>メンバーが登録されていません</p>
        ) : (
          <ul>
            {data.contents.map((member) => (
              <li key={member.id} className={styles.list}>
                <Image className={styles.image} src={member.image.url} alt={member.name} width={member.image.width} height={member.image.height} />

                <dl>
                  <dt className={styles.name}>{member.name}</dt>
                  <dd className={styles.position}>{member.position}</dd>
                  <dd className={styles.profile}>{member.profile}</dd>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
