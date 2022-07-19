import TasksLine from './TasksLine';

const TasksLineCom = ({ data }) => {
  console.log(`${data}, wesh`);
  return (
    <>{data && data.map((element) => <TasksLine key={element.id} task={element} />)}</>
  );
};

export default TasksLineCom;
