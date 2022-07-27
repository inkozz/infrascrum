import TaskItem from './TaskItem';

const TasksList = ({ data, reloadData }) => {
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
        <TaskItem key={element.id} element={element} reloadData={reloadData} />
      ))}
    </>
  );
};

export default TasksList;
