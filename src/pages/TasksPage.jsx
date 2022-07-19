// import { useEffect } from 'react';
import { useQuery } from 'react-query';
// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Tasks from '../components/lists/Tasks';
import { getTasks } from '../data/getData';

const TasksPage = () => {
  const { data: tasks } = useQuery('tasks', getTasks);
  // useEffect(() => {
  //   if (isError) {
  //     toast('Il y a une erreur', { className: 'errorToast' });
  //   }
  // }, [isError]);

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div>
        <div className="flex justify-end">
          <Link to="/addproject">
            <button className="btn primary" type="submit">
              Ajouter un projet
            </button>
          </Link>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Tasks data={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
