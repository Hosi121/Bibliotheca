import "@/style/button.scss";
import { Text } from "@/app/components/common/text/text";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type: "main" | "normal" | "minimal";
  className?: string; // 外部から追加クラスを受け取るプロパティ
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "body3";
}

export const Button = (props: ButtonProps) => {
  const { label, onClick, type, className = "", variant = "body1" } = props;
  return (
    <button
      className={`button button-${type} ${className}`.trim()}
      onClick={onClick}
    >
      <Text variant={variant} bold={true}>
        {label}
      </Text>
    </button>
  );
};
