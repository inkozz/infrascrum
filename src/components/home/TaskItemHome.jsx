const TasksCard = ({ task }) => {
  console.log(task);
  return (
    <div>
      <div className="bg-blue-300 w-64 h-40 m-8 static rounded-lg">
        <div className="bg-white w-64 h-40 mt-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">

          <div className="text-sm font-semibold text-gray-700 m-4 leading-6">
            <p>{task.name}</p>
            <p>{task.status}</p>
          </div>
          <span className="m-4 text-xs flex">Dernière modification :</span>
          <span className="m-4 text-sm flex hover:border-b-1 hover:border-primary">
            {task.update}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
