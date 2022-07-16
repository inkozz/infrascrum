const TasksList = ({ task }) => {
  console.log(task);
  return (
    <div className="border-b border-gray-400">
      <p>{task.name}</p>
      <p>{task.status}</p>
    </div>
  );
};

export default TasksList;
