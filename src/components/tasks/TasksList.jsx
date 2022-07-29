import { useState } from 'react';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { addTask } from '../../data/getData';
import FormTask from '../forms/FormTask';
import TaskItem from './TaskItem';
import Loader from '../ui/Loader';

const TasksList = ({ data, reloadData }) => {
  const [isAdd, setIsAdd] = useState(false);
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
      {isLoading && <Loader />}
      <thead className="text-white">
        <tr>
          <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">Projet</th>
          <th className="p-3 w-2/5 text-primary bg-gray-100">Contenu de la tâche</th>
          <th className="p-3 text-primary bg-gray-100">Personne responsable</th>
          <th className="p-3 text-primary bg-gray-100">Collaborateurs</th>
          <th className="p-3 text-primary bg-gray-100">Rôle</th>
          <th className="p-3 text-primary bg-gray-100">Priorité</th>
          <th className="p-3 text-primary bg-gray-100">Date de début</th>
          <th className="p-3 text-primary bg-gray-100">Date de fin</th>
          <th className="p-3 text-primary bg-gray-100 rounded-tr-lg">Autre</th>
        </tr>
      </thead>
      {data.length === 0 ? (
        <div className="text-2xl" name="tableEmpty">
          Aucune tâche en cours
        </div>
      ) : (
        ''
      )}
      {data.map((element) => (
        <TaskItem key={element.id} element={element} reloadData={reloadData} />
      ))}
      <div className="flex justify-end">
        {isAdd ? (
          <div className="w-full p-8  rounded  ">
            <FormTask saveFunction={saveTask} cancelFunction={cancelTask} />
          </div>
        ) : (
          <div className="flex justify-end p-4">
            <button type="button" className="btn primary" onClick={() => setIsAdd(true)}>
              Ajouter une tâche
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TasksList;
