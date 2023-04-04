import { LinkedinButton } from "components/LinkedinButton/LinkedinButton";
import { Layout } from "../Layout/Layout";
import styles from "./LoginView.module.scss";

export function LoginView() {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.big_text}>Antes de ingresar...</p>
          <div className={styles.buttons}>
            <LinkedinButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}
