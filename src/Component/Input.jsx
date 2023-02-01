import React, { useState } from "react";

function Input(props) {
  const [inputData, setInputData] = useState("");

  const dataSubmitHandler = () => {
    inputData === ""
      ? alert("Please enter the task ! ")
      : props.onAddTodo(inputData);

    setInputData("");
  };

  return (
    <div className="mt-5 flex items-center justify-center flex-col ">
      <input
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Add your new task"
        className="rounded p-3 border-slate-400  rounded w-full focus:outline-none border"
        type="text"
      ></input>
      <button
        onClick={dataSubmitHandler}
        className=" mt-3 bg-green-700 text-white px-9 rounded text-lg py-1.5 font-sans font-semibold border-none hover:bg-green-800"
      >
        Add
      </button>
    </div>
  );
}

export default Input;
