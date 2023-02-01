import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";

function List({ list, deleteTodo, id }) {
  const [taskCompleted, setTaskCompleted] = useState(false);
  console.log(id);

  const toggleTaskStatus = () => {
    setTaskCompleted(!taskCompleted);
  };

  return (
    <li
      className={`flex my-2  py-3 px-4 text-slate-800 text-lg font-mono font-semibold cursor-pointer bg-gray-300 rounded justify-between items-center`}
    >
      <div className="flex gap-6 justify-between items-center">
        <BsFillPatchCheckFill
          value={taskCompleted}
          onClick={toggleTaskStatus}
          className={`text-3xl ${
            taskCompleted === false ? "text-slate-500" : "text-green-700"
          }`}
        ></BsFillPatchCheckFill>
        <div
          className={`text-2xl ${taskCompleted === true ? "line-through" : ""}`}
        >
          {list}
        </div>
      </div>

      <MdDeleteOutline
        onClick={() => deleteTodo(id)}
        className="text-3xl text-red-600"
      ></MdDeleteOutline>
    </li>
  );
}

export default List;
