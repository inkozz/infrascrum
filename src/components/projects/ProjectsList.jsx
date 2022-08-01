import { useState } from 'react';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { addProject } from '../../data/getData';
import FormProjet from '../forms/FormProjet';
import ProjectItem from './ProjectItem';
import Loader from '../ui/Loader';

const ProjectsList = ({ data, reloadData }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { isLoading, mutate: projectAdd } = useMutation(
    '/projects',
    async (projectValues) => addProject(projectValues),
    {
      onSuccess: () => {
        setIsAdd(false);
        toast('Le projet a été ajouté', { className: 'successToast' });
        reloadData();
        console.log('ok');
      },
      onError: () => {
        toast('Il y a une erreur dans l ajout', { className: 'errorToast' });
      },
    },
  );
  const saveProject = (projectValues) => {
    projectAdd(projectValues);
  };
  const cancelProject = () => {
    setIsAdd(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="bg-white p-6 shadow-sm">
        <div className="grid grid-cols-8 gap-x-8 border-b-2 border-primary pb-2 text-center">
          <div className="font-semibold text-lg">Projet</div>
          <div className="font-semibold text-lg">Responsable</div>
          <div className="font-semibold text-lg">Date du début</div>
          <div className="font-semibold text-lg">Date de fin</div>
          <div className="font-semibold text-lg">Mise à jour</div>
          <div className="font-semibold text-lg">Status</div>
          <div className="font-semibold text-lg">Collaborateurs</div>
          <div className="font-semibold text-lg">Options</div>
        </div>
      </div>
      {/* Projet Responsable Date du début Date de fin Maj Status Collaborateurs Options */}
      {data.length === 0 ? (
        <div className="text-2xl" name="tableEmpty">
          Aucun projet dans la BDD
        </div>
      ) : (
        ''
      )}
      {data.map((element) => (
        <ProjectItem key={element.id} element={element} reloadData={reloadData} />
      ))}
      <div className="flex justify-end">
        {!isAdd ? (
          <div className="flex justify-end p-4">
            <button type="button" className="btn primary" onClick={() => setIsAdd(true)}>
              Ajouter un projet
            </button>
          </div>
        ) : (
          <div className="w-full p-8 rounded  ">
            <FormProjet saveFunction={saveProject} cancelFunction={cancelProject} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsList;
