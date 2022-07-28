import { useQuery, useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import ProjectsList from '../components/projects/ProjectsList';
import { getProjects } from '../data/getData';

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

  return (
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
  );
};

export default ProjectsPage;
