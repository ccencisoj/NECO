import { Layout } from "components/Layout/Layout";
import styles from "./RoomView.module.scss";
import { SearchingModal } from "components/SearchingModal/SearchingModal";

export function RoomView() {
  return (
    <>
      <SearchingModal showModal={true} />
      <Layout>
        <div className={styles.main}>
          <div className={styles.user_card}>
            <img className={styles.image} src="/images/person.png" alt="" />
            <p className={styles.name}>Carlos Alberto</p>
          </div>
          <button className={styles.floating_button}>
            <p className={styles.label}>Ver perfil en Linkedin</p>
          </button>
        </div>
      </Layout>
    </>
  );
}
