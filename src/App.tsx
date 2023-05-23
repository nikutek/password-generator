import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import LengthInput from "./LengthInput";

import OutputWindow from "./OutputWindow";

function App() {
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(8);
  const [quantity, setQuantity] = useState(1);
  const [showOutput, setShowOutput] = useState(false);
  let possibleOutcomes = 0;
  useEffect(() => {
    let numberOfSymbols = 0;
    numberOfSymbols += lowercase ? 26 : 0;
    numberOfSymbols += uppercase ? 26 : 0;
    numberOfSymbols += numbers ? 10 : 0;
    numberOfSymbols += symbols ? 18 : 0;

    possibleOutcomes = Math.pow(numberOfSymbols, length);
    console.log(possibleOutcomes);
    // strong 3656158440062976
    // strong 208827064576
    // medium 308915776
    // weak 11881376
    // 3mln hasel na sekunde sie crackuje
  }, [lowercase, uppercase, numbers, symbols, length]);

  const lowercaseToggleHandler = () => {
    setLowercase((prevState) => !prevState);
  };

  const uppercaseToggleHandler = () => {
    setUppercase((prevState) => !prevState);
  };

  const numberToggleHandler = () => {
    setNumbers((prevState) => !prevState);
  };

  const symbolToggleHandler = () => {
    setSymbols((prevState) => !prevState);
  };

  const lengthChangehandler = (e: React.FormEvent<HTMLInputElement>) => {
    setLength(parseInt(e.currentTarget.value));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOutput(true);
  };

  const quantityChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.currentTarget.value));
  };

  return (
    <div className="h-full min-h-screen bg-slate-600 flex justify-center items-center ">
      <main className="bg-slate-800 w-3/6 h-3/5 rounded-3xl p-5 my-10">
        <h1 className="text-center font-bold text-xl text-gray-200">
          Password Generator
        </h1>

        <form onSubmit={submitHandler} className="flex items-center flex-col">
          <div className="flex flex-wrap justify-center items-center">
            <Checkbox
              name="Lowercase"
              onChange={lowercaseToggleHandler}
              checked={lowercase}
            />
            <Checkbox
              name="Uppercase"
              onChange={uppercaseToggleHandler}
              checked={uppercase}
            />
            <Checkbox
              name="Numbers"
              onChange={numberToggleHandler}
              checked={numbers}
            />
            <Checkbox
              name="Symbols"
              onChange={symbolToggleHandler}
              checked={symbols}
            />
          </div>

          <p className=" text-right text-slate-100">
            <label>Quantity</label>
            <select
              name="quantity"
              className=" text-slate-950 m-2"
              onChange={quantityChangeHandler}
            >
              <option>1</option>
              <option>5</option>
              <option>10</option>
              <option>30</option>
              <option>50</option>
              <option>100</option>
            </select>
          </p>

          <LengthInput onChangeHandler={lengthChangehandler} length={length} />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          >
            Generate
          </button>
        </form>

        {showOutput && (
          <OutputWindow
            lowercase={lowercase}
            uppercase={uppercase}
            numbers={numbers}
            symbols={symbols}
            length={length}
            quantity={quantity}
          />
        )}
      </main>
    </div>
  );
}

export default App;
