import styles from "./Layout.module.scss";

export function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <img
        className={styles.background}
        src="/images/background.png"
        alt="background"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.navigation}>
            <div className={styles.left_side}>
              <img className={styles.logo} src="/logos/neco.svg" alt="logo" />
            </div>
            <div className={styles.right_side}></div>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
