import styles from "./PlatformButton.module.scss";

export function PlatformButton({
  icon,
  label,
  backgroundColor,
  backgroundColorActive,
  textColor,
  borderColor,
  borderColorIntern,
  onClick,
}) {
  return (
    <div
      className={styles.platform_button}
      style={{
        "--background-color": backgroundColor,
        "--background-color-active": backgroundColorActive,
        "--text-color": textColor,
        "--border-color": borderColor,
        "--border-color-intern": borderColorIntern,
      }}
      onClick={onClick}
    >
      <div className={styles.icon_container}>
        <img className={styles.icon} src={icon} alt="icon" />
      </div>
      <div className={styles.label_container}>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
}
