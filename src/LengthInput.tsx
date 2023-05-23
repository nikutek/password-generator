import { FC, InputHTMLAttributes } from "react";

interface rangeInputProps {
  onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  length: number;
}

const LengthInput: FC<rangeInputProps> = ({ onChangeHandler, length }) => {
  return (
    <div className=" flex justify-center items-center flex-wrap">
      <label htmlFor="length" className=" w-full text-center text-slate-100">
        Length: <span className=" text-2xl">{length}</span> characters
      </label>
      <input
        className=" w-4/5"
        onChange={onChangeHandler}
        type="range"
        name="length"
        id="length"
        min="5"
        max="32"
        step="1"
        value={length}
      />
    </div>
  );
};

export default LengthInput;
