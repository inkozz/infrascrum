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

      <div className="bg-primary text-white border-2 border-black rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-9 gap-x-8 border-b-2 border-primary pb-2 text-center">
          <div className="font-semibold text-lg">Projet</div>
          <div className="font-semibold text-lg">Description</div>
          <div className="font-semibold text-lg">Responsable</div>
          <div className="font-semibold text-lg">Collaborateurs</div>
          <div className="font-semibold text-lg">Rôle</div>
          <div className="font-semibold text-lg">Priorité</div>
          <div className="font-semibold text-lg">Date de début</div>
          <div className="font-semibold text-lg">Date de fin</div>
          <div className="font-semibold text-lg">Options</div>
        </div>
      </div>
      {data.length === 0 ? (
        <div className="text-2xl" name="tableEmpty">
          Aucune tâche en cours
        </div>
      ) : (
        ''
      )}
      {data.tasks.map((element) => (
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
