import TasksList from './TasksList';

const Tasks = ({ data }) => (
  <div>
    {data && data.map((element) => <TasksList key={element.id} task={element} />)}
  </div>
);

export default Tasks;
