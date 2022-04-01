
interface TaskProps {
    id: number;
  taskName: string;
  dueDate: string;
  created: string;
  taskType: string;
  complete: boolean;
}

export default function Task(props: TaskProps): JSX.Element {


  return (
    <section className={"task " + props.taskType}>

      <input 
      type="checkbox"
      id="complete"
      checked={props.complete}
      name="complete"
      />
        
      <p>{props.taskName}</p>
      <p>{props.dueDate}</p>
      <p>{props.created}</p>
    </section>
  );
}
