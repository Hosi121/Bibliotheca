import { Button } from "@/app/components/common/button/button";
import { Text } from "@/app/components/common/text/text";
import "@/style/alert.scss";

interface AlertProps {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
}

export const Alert = (props: AlertProps) => {
  const { message, onClickOK, onClickCancel } = props;
  return (
    <div className="alert-container">
      <Text className="alert-message" bold={true}>{message}</Text>
      <div className="alert-buttons">
        <Button
          className="alert-button cancel"
          label="↩︎"
          type={"minimal"}
          onClick={onClickCancel}
        />
        <Button
          className="alert-button ok"
          label="✓"
          type={"minimal"}
          onClick={onClickOK}
        />
      </div>
    </div>
  );
};
