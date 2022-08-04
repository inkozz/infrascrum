import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { useEffect, useContext } from 'react';
import ProjectsList from '../components/projects/ProjectsList';
import { getProjects } from '../data/getData';
import LoginPage from './LoginPage';
import loginCtx from '../loginCtx';
import Loader from '../components/ui/Loader';

const ProjectsPage = () => {
  const {
    data: projects,
    isError,
    isFetching,
    isLoading,
    refetch: reloadData,
  } = useQuery('projects', getProjects);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  });
  const { isLogged } = useContext(loginCtx);

  return (
    <>
      {isLogged ? (
        <div className="bg-transparent p-8 w-full">
          <div className="inline-block min-w-full shadow overflow-hidden">
            {isLoading && isFetching && <Loader />}
            {projects && !isFetching && (
              <ProjectsList data={projects} reloadData={reloadData} />
            )}
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
      <div />
    </>
  );
};
export default ProjectsPage;
