import { React, useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  useEffect(() => {}, [todo]);

  const changeHandler = (e) => {
    const inputValue = e.target.value;
    const updateWaring = inputValue.includes("js")
      ? `You need JavaScript to complete the task. Do you have it`
      : null;

    setTodo(inputValue);
    setWarning(updateWaring);

    // if (inputValue) {
    //   setTodo(inputValue);
    //   inputValue.includes("js")
    //     ? setWarning(
    //         `You need JavaScript skill to complete the task. Do you have it?`
    //       )
    //     : setWarning(`Good Choice`);
    // } else {
    //   setTodo("");
    // }
    // console.log(e.target.value);
    // return setTodo(e.target.value);
  };

  console.log(todo);
  return (
    <div className="p-4">
      <p className="py-4">{todo}</p>
      <textarea
        className="border-2 border-gray-500"
        name="todo"
        value={todo}
        id=""
        cols="25"
        rows="2"
        onChange={changeHandler}
      ></textarea>
      <hr />
      <h2>{warning || "Good Choice"}</h2>
    </div>
  );
}

export default Todo;
