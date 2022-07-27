import TaskItemHome from './TaskItemHome';

const Tasks = ({ data }) => (
  // console.log(data);
  <div className="grid grid-cols-3 gap-2">
    {' '}
    {data && data.map((element) => <TaskItemHome key={element.id} task={element} />)}
  </div>
);
export default Tasks;
