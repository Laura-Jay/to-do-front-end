import React from "react";

interface TaskProps {
  taskName: string;
  dueDate: string;
  created: string;
}

export default function Task(props: TaskProps): JSX.Element {
  return (
    <section className="task">
      <p>{props.taskName}</p>
      <p>{props.dueDate}</p>
      <p>{props.created}</p>
    </section>
  );
}
