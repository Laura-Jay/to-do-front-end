import React, { useState } from "react";
import Task from "./Task";
import taskData from "./taskData.json";

// const axios = require('axios').default;

interface TaskInterface {
  id: number;
  taskName: string;
  taskDescription: string;
  dueDate: string;
  taskType: string;
  created: string;
}

export default function MainComponent(): JSX.Element {
  const [formData, setFormData] = useState({
    id: 1,
    taskName: "",
    taskDescription: "",
    dueDate: "",
    taskType: "",
    created: new Date().toJSON().slice(0, 10),
  });

  function handleFormChange(event: any) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "radio" ? checked : value,
      };
    });
  }

  const [taskList, setTaskList] = useState<TaskInterface[]>([]);

  const addTask = (taskInfo: TaskInterface) => {
    setTaskList([...taskList, taskInfo]);
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    addTask(formData);
    setFormData({
      id: formData.id++,
      taskName: "",
      taskDescription: "",
      dueDate: "",
      taskType: "",
      created: new Date().toJSON().slice(0, 10),
    });
  }

  const taskListItems = taskList.map((data) => {
    return (
      <Task
        key={data.id}
        taskName={data.taskName}
        dueDate={data.dueDate}
        created={data.created}
      />
    );
  });

  return (
    <>
      <div className="button-bar">
        <button className="button-bar--start">Add ToDo</button>
        <button className="button-bar--middle">Over-Due Tasks</button>
        <button className="button-bar--end">All Tasks</button>
      </div>
      <ul className="task-headings">
        <li>TASK</li>
        <li>|</li>
        <li>DUE</li>
        <li>|</li>
        <li>CREATED</li>
      </ul>
      <div className="task-list">{taskListItems}</div>
      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="task-name">Task:</label>
        <input
          id="task-name"
          type="text"
          placeholder="Add a task name"
          onChange={handleFormChange}
          name="taskName"
          value={formData.taskName}
        />
        <br />

        <label htmlFor="task-description">Description:</label>
        <textarea
          className="description-input"
          id="task-description"
          placeholder="Add a task description"
          onChange={handleFormChange}
          name="taskDescription"
          value={formData.taskDescription}
        />
        <br />

        <label htmlFor="due-date">Due Date:</label>
        <input
          id="due-date"
          type="text"
          placeholder="XX/XX/XXXX"
          onChange={handleFormChange}
          name="dueDate"
          value={formData.dueDate}
        />

        <fieldset className="radio-buttons">
          <legend>Task Type</legend>

          <input
            type="radio"
            id="personal"
            name="task-type"
            value="personal"
            checked={formData.taskType === "personal"}
            onChange={handleFormChange}
          />
          <label htmlFor="personal">Personal</label>
          <br />

          <input
            type="radio"
            id="work"
            name="task-type"
            value="work"
            checked={formData.taskType === "work"}
            onChange={handleFormChange}
          />
          <label htmlFor="work">Work</label>
        </fieldset>
        <button>Submit Task</button>
      </form>
    </>
  );
}
