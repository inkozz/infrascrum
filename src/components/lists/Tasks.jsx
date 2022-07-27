import TasksCard from './TasksCard';

const Tasks = ({ data }) => (
  // console.log(data);
  <div>
    {data && data.map((element) => <TasksCard key={element.id} task={element} />)}
  </div>
);
export default Tasks;
