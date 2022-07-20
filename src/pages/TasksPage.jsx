import { useQuery, useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TasksLineCom from '../components/lists/TasksLineCom';
import apiClient from '../http-common';

const TasksPage = () => {
  // useEffect(() => {
  //   if (isError) {
  //     toast('Il y a une erreur', { className: 'errorToast' });
  //   }
  // }, [isError]);
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState();
  const { isLoading, refetch: getTasks } = useQuery(
    'tasks',
    async () => await apiClient.get('/tasks'),
    {
      onSuccess: (res) => {
        setTasks(res.data);
      },
    },
  );
  const { isLoading: isDeleting, mutate } = useMutation(
    'tasks',
    async () => await apiClient.delete(`/tasks/${id}`),
    {
      onSuccess: () => {
        toast.success('La tache a été supprimé');
        getTasks();
      },
    },
  );

  const deleteTask = async (idTask) => {
    await setId(idTask);
    mutate();
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div>
        <div className="flex justify-end">
          <Link to="/addtasks">
            <button className="btn primary" type="submit">
              Ajouter une tache
            </button>
          </Link>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="table text-gray-400 w-full space-y-6 text-sm">
              <thead className="text-white">
                <tr>
                  <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">Projet</th>
                  <th className="p-3 w-2/5 text-primary bg-gray-100">
                    Contenu de la tâche
                  </th>
                  <th className="p-3 text-primary bg-gray-100">Personne responsable</th>
                  <th className="p-3 text-primary bg-gray-100">Collaborateurs</th>
                  <th className="p-3 text-primary bg-gray-100">Rôle</th>
                  <th className="p-3 text-primary bg-gray-100">Statut</th>
                  <th className="p-3 text-primary bg-gray-100">Date de début</th>
                  <th className="p-3 text-primary bg-gray-100">Date de fin</th>
                  <th className="p-3 text-primary bg-gray-100 rounded-tr-lg">Autre</th>
                </tr>
              </thead>
              {isLoading || isDeleting}
              <TasksLineCom tasks={tasks} deleteTask={deleteTask} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
