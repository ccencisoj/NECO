import { LinkedinButton } from "components/LinkedinButton/LinkedinButton";
import { Layout } from "../Layout/Layout";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./LoginView.module.scss";

export function LoginView() {
	const dataSesion = useSession();

	return (
		<Layout>
			<div className={styles.main}>
				<div className={styles.container}>
					<p className={styles.big_text}>Antes de ingresar...</p>
					<div className={styles.buttons}>
						<LinkedinButton
							onClick={() => signIn("linkedin", { redirect: false })}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}
