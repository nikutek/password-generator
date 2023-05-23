import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onChange: () => void;
  checked: boolean;
}

const Checkbox: FC<InputProps> = (props) => {
  const name = props.name;
  const labelClass = props.checked ? "text-slate-100" : "text-slate-500";
  const checkboxClass = props.checked ? "accent-pink-300" : "bg-slate-800";
  return (
    <div className="basis-1/2 text-center p-2 ">
      <label htmlFor={name} className={labelClass}>
        {name}
      </label>
      <input
        onClick={props.onChange}
        type="checkbox"
        name={name}
        checked={props.checked}
        className={`mx-2 ${checkboxClass}`}
      />
    </div>
  );
};

export default Checkbox;
