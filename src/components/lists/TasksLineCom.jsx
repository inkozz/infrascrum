import TasksLine from './TasksLine';

const TasksLineCom = ({ tasks, deleteTask }) => {
  console.log(tasks);
  return (
    <>
      {tasks &&
        tasks.map((element) => (
          <TasksLine key={element.id} task={element} deleteTask={deleteTask} />
        ))}
    </>
  );
};

export default TasksLineCom;
