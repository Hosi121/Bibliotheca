import "@/style/button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type: "main" | "normal" | "minimal";
  className?: string; // 外部から追加クラスを受け取るプロパティ
}

export const Button = (props: ButtonProps) => {
  const { label, onClick, type, className = "" } = props;
  return (
    <button
      className={`button button-${type} ${className}`.trim()}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
