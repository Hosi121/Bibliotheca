import '@/style/form.scss';
interface FormProps
{
  label: string;
  type: "inline" | "online";
  setter: React.Dispatch<React.SetStateAction<string>>;
}

export const Form = (props: FormProps) => {
  const { label, type, setter } = props;

  return (
    <form className={`form-${type}`}>
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
