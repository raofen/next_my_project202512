// not-found.tsx
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <dl>
          <dt className={styles.title}>ページが見つかりません</dt>
          <dd className={styles.text}>
            ページが存在しません。
            <br />
            URLをご確認ください。
          </dd>
        </dl>
      </div>
    </>
  );
}
