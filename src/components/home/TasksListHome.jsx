import TaskItemHome from './TaskItemHome';

const Tasks = ({ data }) => (
  // console.log(data);
  <div> Tasks
    {data && data.map((element) => <TaskItemHome key={element.id} task={element} />)}
   
  </div>
);
export default Tasks;
