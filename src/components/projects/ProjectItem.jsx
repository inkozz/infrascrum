import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery, useMutation } from 'react-query';
import { format, parseISO } from 'date-fns';
import { removeProject, updateProject, getAllUsers } from '../../data/getData';
import SelectCheckBox from '../forms/selects/SelectCheckBox';
import FormProjet from '../forms/FormProjet';
import Loader from '../ui/Loader';

const ProjectItem = ({ element, reloadData }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [mode, setMode] = useState(false);

  const { data: allUsers } = useQuery('allUsers', getAllUsers);
  format(parseISO(element.update), 'MM/dd/yyyy HH:mm:ss');
  const { isLoading, mutate: deleteProject } = useMutation(
    '/projects',
    async (projectValues) => removeProject(projectValues),
    {
      onSuccess: () => {
        toast('Projet supprimé', { className: 'successToast' });
        reloadData();
      },
      onError: () => {
        toast('Il y a une erreur dans la supression', { className: 'errorToast' });
      },
    },
  );
  const { isLoading: isLoadingUpdate, mutate: projectUpdate } = useMutation(
    '/projects',
    async (projectValues) => updateProject({ id: element.id, ...projectValues }),
    {
      onSuccess: () => {
        toast('Projet mis à jour', { className: 'successToast' });
        setMode(false);
        reloadData();
      },
      onError: () => {
        toast('Il y a une erreur dans la mise à jour', { className: 'errorToast' });
      },
    },
  );
  const cancelProject = () => {
    setMode(false);
  };
  const cancelAddUser = () => {
    setIsAdd(false);
  };
  return (
    <>
      {isLoading || (isLoadingUpdate && <Loader />)}
      {mode === 'edit' ? (
        <div>
          <FormProjet
            name={element.name}
            description={element.description}
            logo={element.logo}
            startDate={element.startDate}
            endDate={element.endDate}
            status={element.status}
            saveFunction={projectUpdate}
            cancelFunction={cancelProject}
            mode="edit"
          />
        </div>
      ) : (
        <div className="grid grid-cols-8 gap-8 border-b-2 bg-white border-gray-200 p-8 text-center hover:bg-blue-100">
          <div className="flex justify-center items-center">
            <div className="flex-shrink-0 w-10 h-10 mr-8">
              <img
                className="w-full h-full rounded-full bg-primary"
                src={element.logo}
                alt="project"
              />
            </div>

            <p className="text-gray-900">{element.name}</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-shrink-0 w-10 h-10 mr-8">
              <img
                className="w-full h-full rounded-full bg-primary"
                src={element.userCreator.img}
                alt="Responsable"
              />
            </div>
            <p className="text-gray-900">{element.userCreator.name}</p>
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
          <div className="flex items-center justify-center">
            <p className="text-gray-900">
              {format(parseISO(element.update), 'dd/MM/yyyy HH:mm:ss')}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                className={`text-gray-50 rounded-md px-2 ${
                  element.status === 'Urgent' ? 'bg-red' : ' relative bg-green-500'
                } ${element.status === 'En attente' ? 'bg-gray-500' : ''}`}>
                {element.status}
              </span>
            </span>
          </div>
          <div className=" text-sm flex items-center justify-center">
            <div className="relative z-30">
              {element.users.map((user) => (
                <img className="w-10 h-10 rounded-full" src={user.img} alt="#" />
              ))}
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-[#7FFF00] border-2 border-white dark:border-gray-800 rounded-full" />
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-100 z-0 -ml-4">
              <p className="text-xl font-bold text-primary pt-1 pl-2">
                {element.users.length}
              </p>
            </div>
          </div>

          {/* <div className="relative z-20 -ml-4">
                <img className="w-10 h-10 rounded-full" src={element.logo} alt="logo" />
                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-red border-2 border-white dark:border-gray-800 rounded-full" />
              </div>
              <div className="relative z-10 -ml-4">
                <img className="w-10 h-10 rounded-full" src={element.logo} alt="logo" />
                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-gray-400 border-2 border-white dark:border-gray-800 rounded-full" />
              </div> */}

          <div className="flex justify-center">
            <button type="button" onClick={() => setIsAdd(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 cursor-pointer hover:text-[#7FFF00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </button>

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
            <button type="button" onClick={() => deleteProject(element)}>
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
      {isAdd ? (
        <div className="flex flex-row justify-around bg-white">
          <SelectCheckBox
            data={allUsers}
            element={element}
            reloadData={reloadData}
            cancelFunction={cancelAddUser}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ProjectItem;
