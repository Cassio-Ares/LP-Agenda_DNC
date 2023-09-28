import "./InputTasks.scss";
import Button from "../Button";
import {useState } from "react";

const InputTasks = ({setDataTask }) => {
  const [task, setTask] = useState({});
  
  const handleChange = (e) => {
    setTask({id:e.target.index,title: e.target.value });
    
  };

  const submit = (e) => {
    e.preventDefault();
    setDataTask((prev) => {
      return [...prev, task];
    }) ;
  };

  return (
    <div>
      <form onSubmit={submit} className="form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nova tarefa..."
          onChange={handleChange}
        />
        <Button text="+" styles="btn_form" />
      </form>
    </div>
  );
};

export default InputTasks;
