import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { addProject } from '../../data/getData';
import FormProjet from '../forms/FormProjet';
import ProjectItem from './ProjectItem';

const ProjectsList = ({ data, reloadData }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { isLoading, mutate: projectAdd } = useMutation(
    'projects',
    async (projectValues) => addProject(projectValues),
    {
      onSuccess: () => {
        setIsAdd(false);
        toast('Le projet a été ajouté', { className: 'successToast' });
        reloadData();
      },
      onError: () => {
        toast('Il y a une erreur dans l ajout', { className: 'errorToast' });
      },
    },
  );
  const saveProject = (projectValues) => {
    projectAdd(projectValues);
    console.log(projectValues);
  };
  const cancelProject = () => {
    setIsAdd(false);
  };
  return (
    <>
      {isLoading}
      <thead className="text-white">
        <tr>
          <th className="p-3 text-primary bg-gray-100">Projet</th>
          <th className="p-3 text-primary bg-gray-100">Responsable</th>
          <th className="p-3 text-primary bg-gray-100">Date du début</th>
          <th className="p-3 text-primary bg-gray-100">Date de fin</th>
          <th className="p-3 text-primary bg-gray-100">Maj</th>
          <th className="p-3 text-primary bg-gray-100">Status</th>
          <th className="p-3 text-primary bg-gray-100">Collaborateurs</th>
          <th className="p-3 text-primary bg-gray-100">Options</th>
        </tr>
      </thead>
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
          <div className="w-full p-8  rounded  ">
            <FormProjet
              saveFunction={saveProject}
              cancelFunction={cancelProject}
              reloadData={reloadData}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsList;
