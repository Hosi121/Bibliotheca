import "@/style/form.scss";

interface FormProps {
  label: string;
  type: "inline" | "online";
  setter: React.Dispatch<React.SetStateAction<string>>;
  className?: string; // classNameをオプションとして追加
}

export const Form = (props: FormProps) => {
  const { label, type, setter, className } = props;

  return (
    <form className={`form-${type} ${className || ""}`.trim()}>
      {type === "inline" ? (
        <>
          <input
            id="input-field"
            type="text"
            placeholder={label}
            onChange={(e) => setter(e.target.value)}
          />
        </>
      ) : (
        <>
          <label htmlFor="input-field">{`${label}`}</label>
          <input
            id="input-field"
            type="text"
            onChange={(e) => setter(e.target.value)}
          />
        </>
      )}
    </form>
  );
};
