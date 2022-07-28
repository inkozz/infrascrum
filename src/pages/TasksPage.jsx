import { useQuery, useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { useEffect, useState, useContext } from 'react';
import { getTasks, addTask } from '../data/getData';
import TasksList from '../components/tasks/TasksList';
import FormTask from '../components/forms/FormTask';
import loginCtx from '../loginCtx';
import LoginPage from './LoginPage';

const TasksPage = () => {
  const {
    data: tasks,
    isError,
    isFetching,
    refetch: reloadData,
  } = useQuery('tasks', getTasks);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  });
  const [isAdd, setIsAdd] = useState(false);
  const { isLogged } = useContext(loginCtx);
  const { isLoading, mutate: taskAdd } = useMutation(
    'tasks',
    async (taskValues) => addTask(taskValues),
    {
      onSuccess: () => {
        setIsAdd(false);
        toast('Tâche ajoutée', { className: 'successToast' });
        reloadData();
      },
      onError: () => {
        toast("Erreur dans l'ajout", { className: 'errorToast' });
      },
    },
  );
  const saveTask = (taskValues) => {
    taskAdd(taskValues);
    console.log(taskValues);
  };
  const cancelTask = () => {
    setIsAdd(false);
  };

  return (
    <>
      {isLogged ? (
        <div className="bg-white p-8 rounded-md w-full">
          <div>
            {/* <div className="flex justify-end">
         <Link to="/addtasks">
           <button className="btn primary" type="submit">
             Ajouter une tache
           </button>
         </Link>
       </div> */}
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="table text-gray-400 w-full space-y-6 text-sm">
                  <thead className="text-white">
                    <tr>
                      <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">
                        Projet
                      </th>
                      <th className="p-3 w-2/5 text-primary bg-gray-100">
                        Contenu de la tâche
                      </th>
                      <th className="p-3 text-primary bg-gray-100">
                        Personne responsable
                      </th>
                      <th className="p-3 text-primary bg-gray-100">Collaborateurs</th>
                      <th className="p-3 text-primary bg-gray-100">Rôle</th>
                      <th className="p-3 text-primary bg-gray-100">Priorité</th>
                      <th className="p-3 text-primary bg-gray-100">Date de début</th>
                      <th className="p-3 text-primary bg-gray-100">Date de fin</th>
                      <th className="p-3 text-primary bg-gray-100 rounded-tr-lg">
                        Autre
                      </th>
                    </tr>
                  </thead>
                  {isLoading && isFetching}
                  {tasks && !isFetching && (
                    <TasksList data={tasks} reloadData={reloadData} />
                  )}
                </table>
                <div className="flex justify-end">
                  {isAdd ? (
                    <div className="w-full p-8  rounded  ">
                      <FormTask saveFunction={saveTask} cancelFunction={cancelTask} />
                    </div>
                  ) : (
                    <div className="flex justify-end p-4">
                      <button
                        type="button"
                        className="btn primary"
                        onClick={() => setIsAdd(true)}>
                        Ajouter une tâche
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default TasksPage;
