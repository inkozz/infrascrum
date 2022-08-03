import TaskItemHome from './TaskItemHome';

const TasksListHome = ({ data }) => (
  <div className="grid grid-cols-3 gap-1">
    {data && data.map((element) => <TaskItemHome key={element.id} data={element} />)}
  </div>
);

export default TasksListHome;
