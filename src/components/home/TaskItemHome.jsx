const TaskItemHome = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div className="bg-blue-300 w-64 h-40 m-4 rounded-lg">
        <div className="bg-white w-64 h-40 mt-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
          <div className="text-sm font-semibold text-gray-700 m-4 leading-6">
            <p>{data.name}</p>
            <p>{data.priority}</p>
            <p>{data.description}</p>
          </div>
          <span className="m-4 text-xs flex">Attribuer la tâche</span>
        </div>
      </div>
    </div>
  );
};

export default TaskItemHome;
