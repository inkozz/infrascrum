import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { format, parseISO } from 'date-fns';
import { removeTask, updateTask } from '../../data/getData';
import FormTask from '../forms/FormTask';
import Loader from '../ui/Loader';

const TaskItem = ({ element, reloadData }) => {
  const [mode, setMode] = useState(false);
  const { isLoading, mutate: deleteTask } = useMutation(
    '/tasks',
    async (taskValues) => removeTask({ id: taskValues.id }),
    {
      onSuccess: () => {
        toast('Tâche supprimée', { className: 'successToast' });
        reloadData();
      },
      onError: () => {
        toast('Il y a une erreur dans la supression', { className: 'errorToast' });
      },
    },
  );
  const { isLoading: isLoadingUpdate, mutate: taskUpdate } = useMutation(
    '/tasks',
    async (taskValues) => updateTask({ id: element.id, ...taskValues }),
    {
      onSuccess: () => {
        toast('Tâche mise à jour', { className: 'successToast' });
        setMode(false);
        reloadData();
      },
      onError: () => {
        toast('Il y a une erreur dans la mise à jour', { className: 'errorToast' });
      },
    },
  );
  const cancelTask = () => {
    setMode(false);
  };
  return (
    <>
      {isLoading || (isLoadingUpdate && <Loader />)}
      {mode === 'edit' ? (
        <FormTask
          name={element.name}
          description={element.description}
          startDate={element.startDate}
          endDate={element.endDate}
          priority={element.priority}
          project={element.project}
          roles={element.roles}
          saveFunction={taskUpdate}
          cancelFunction={cancelTask}
          mode="edit"
        />
      ) : (
        <div className="grid grid-cols-9 gap-x- border-b-2 border-gray-200 pb-2 text-center hover:bg-blue-100  sm:rounded-md">
          <div className="flex items-center justify-center">
            <p className="text-gray-900">{element.project.name}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-900">{element.description}</p>
          </div>
          <div className="flex items-center justify-center">
            {/* <p className="text-gray-900">{element.project.userCreator}</p> */}
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-900">{element.name}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-900">{element.roles}</p>
          </div>
          <div className="flex-shrink-0 w-20 h-10 mx-auto mt-4">
            <span
              className={`text-gray-50 rounded-md px-2 ${
                element.priority === 'High' ? 'bg-red' : 'bg-green-500'
              }`}>
              {element.priority}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-900">
              {format(parseISO(element.startDate), 'dd/MM/yyyy')}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-900">
              {format(parseISO(element.endDate), 'dd/MM/yyyy')}
            </p>
          </div>
          <div className="flex justify-center">
            <button type="button" onClick={() => setMode('edit')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 cursor-pointer hover:text-[#deb887] hover:animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <button type="button" onClick={() => deleteTask(element)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-red cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
