import TaskItemHome from './TaskItemHome';

const Tasks = ({ task }) => {
  console.log(task);
  return (
    <div className="grid grid-cols-3 gap-1">
      {task && task.map((element) => <TaskItemHome key={element.id} task={element} />)}
    </div>
  );
};
export default Tasks;
