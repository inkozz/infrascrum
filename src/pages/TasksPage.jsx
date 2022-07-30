import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { useEffect, useContext } from 'react';
import { getAllTasksByUser } from '../data/getData';
import TasksList from '../components/tasks/TasksList';
import LoginPage from './LoginPage';
import loginCtx from '../loginCtx';

const TasksPage = () => {
  const {
    data: tasks,
    isError,
    isFetching,
    refetch: reloadData,
  } = useQuery('tasks', getAllTasksByUser);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  });
  const { isLogged } = useContext(loginCtx);

  return (
    <>
      {isLogged ? (
        <div className="bg-white p-8 rounded-md w-full">
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="table text-gray-400 w-full space-y-6 text-sm">
                  {tasks && !isFetching && (
                    <TasksList data={tasks} reloadData={reloadData} />
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
      <div />
    </>
  );
};

export default TasksPage;
