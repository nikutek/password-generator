import { FC, useState } from "react";
import copy from "copy-to-clipboard";

interface props {
  text: string;
}

const PasswordComponent: FC<props> = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const text = event.currentTarget.parentElement?.textContent;
    console.log(text);
    setIsCopied(true);
    if (event.currentTarget.parentElement?.textContent) {
      copy(event.currentTarget.parentElement?.textContent);
    }
  };

  return (
    <p className=" p-2 m-2 rounded-lg text-center bg-slate-600">
      {props.text}
      <button
        className=" float-right  rounded-md p-1 h-1/3 text-xs"
        onClick={copyHandler}
      >
        {!isCopied ? (
          <img
            src={require("./static/copy-two-paper-sheets-interface-symbol.png")}
            alt=""
            className="h-5 w-5 invert mr-3"
          />
        ) : (
          <img
            src={require("./static/kisspng-computer-icons-checkbox-font-login-button-5ac3a27fecb8b3.7456382715227705599696.png")}
            alt=""
            className="h-5 w-5 invert mr-3"
          />
        )}
      </button>
    </p>
  );
};

export default PasswordComponent;
