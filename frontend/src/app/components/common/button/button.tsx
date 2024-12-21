import "@/style/button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type: "main" | "normal" |"minimal";
}
export const Button = (props: ButtonProps) =>
{ 
  const { label, onClick, type } = props;
  return (
    <button className={`button button-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};
