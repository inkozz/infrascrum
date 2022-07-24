import TasksLine from './TasksLine';

const TasksLineCom = ({ data, reloadData }) => {
  console.log(data);
  return (
    <>
      {data.length === 0 ? (
        <div className="text-2xl" name="tableEmpty">
          Aucune tâche en cours
        </div>
      ) : (
        ''
      )}
      {data.map((element) => (
        <TasksLine key={element.id} element={element} reloadData={reloadData} />
      ))}
    </>
  );
};

export default TasksLineCom;
