import { PlatformButton } from "components/PlatformButton/PlatformButton";

export function LinkedinButton({ icon, label, ...props }) {
  return (
    <PlatformButton
      icon="/icons/linkedin.svg"
      label="Inicar sesion con linkedin"
      backgroundColor="#0A66C2"
      backgroundColorActive="#095caf"
      textColor="#fff"
      borderColor="#0A66C2"
      borderColorIntern="#ccc5"
      {...props}
    />
  );
}
