import { useState, FC } from "react";
import Password from "./models/Password";
import PasswordComponent from "./PasswordComponent";

interface inputProps {
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
  quantity: number;
}

const OutputWindow: FC<inputProps> = (props) => {
  const passwords: Password[] = new Array();

  while (passwords.length < props.quantity) {
    passwords.push(
      new Password(
        props.lowercase,
        props.uppercase,
        props.numbers,
        props.symbols,
        props.length
      )
    );
  }

  return (
    <div className="text-slate-100">
      {passwords.map((password) => (
        <PasswordComponent text={password.text} />
      ))}
    </div>
  );
};

export default OutputWindow;
