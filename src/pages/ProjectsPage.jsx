import { useQuery, useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Projects from '../components/lists/Projects';
import apiClient from '../http-common';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [id, setId] = useState();
  const { isLoading, refetch: getProjects } = useQuery(
    'projects',
    async () => await apiClient.get('/projects'),
    {
      onSuccess: (res) => {
        setProjects(res.data);
      },
    },
  );
  const { isLoading: isDeleting, mutate } = useMutation(
    'projects',
    async () => await apiClient.delete(`/projects/${id}`),
    {
      onSuccess: () => {
        toast.success('Le projet a été supprimé');
        getProjects();
      },
    },
  );

  const deleteProject = async (idProject) => {
    await setId(idProject);
    mutate();
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div>
        <div className="flex justify-end">
          <Link to="/addprojects">
            <button className="btn primary" type="submit">
              Ajouter un projet
            </button>
          </Link>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Nom du projet
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Responsable
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Date de Début
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Date limite
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Maj
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Collaborateurs
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    Options
                  </th>
                </tr>
              </thead>
              {isLoading || isDeleting}
              <Projects projects={projects} deleteProject={deleteProject} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
