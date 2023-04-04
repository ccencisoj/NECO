import clsx from "clsx";
import { Layout } from "components/Layout/Layout";
import styles from "./SearchingModal.module.scss";

export function SearchingModal({ showModal }) {
	const styles_searching_modal = clsx({
		[styles.searching_modal]: true,
		[styles.show_modal]: showModal,
		[styles.hide_modal]: !showModal,
	});

	return (
		<div className={styles_searching_modal}>
			<Layout>
				<div className={styles.main}>
					<div className={styles.container}>
						<p className={styles.big_text}>Buscando tu proxima conexion</p>
						<div className={styles.loading_bar}>
							<span className={styles.thumb}></span>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
