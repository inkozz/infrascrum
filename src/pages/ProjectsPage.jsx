import { useQuery, useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { useEffect, useState, useContext } from 'react';
import ProjectsList from '../components/projects/ProjectsList';
import { getProjects, addProject } from '../data/getData';
import LoginPage from './LoginPage';
import loginCtx from '../loginCtx';

const ProjectsPage = () => {
  const {
    data: projects,
    isError,
    isFetching,
    refetch: reloadData,
  } = useQuery('projects', getProjects);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  });
  const [isAdd, setIsAdd] = useState(false);
  const { isLogged } = useContext(loginCtx);
  const { isLoading, mutate: projectAdd } = useMutation(
    'projects',
    async (projectValues) => addProject(projectValues),
    {
      onSuccess: () => {
        // setIsAdd(false);
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
      {isLogged ? (
        <div className="bg-white p-8 rounded-md w-full">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="table text-gray-400 w-full space-y-6 text-sm">
              {isLoading && isFetching}
              {projects && !isFetching && (
                <ProjectsList data={projects} reloadData={reloadData} />
              )}
            </table>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default ProjectsPage;
