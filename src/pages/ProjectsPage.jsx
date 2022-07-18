// import { useEffect } from 'react';
import { useQuery } from 'react-query';
// import toast from 'react-hot-toast';
import Projects from '../components/lists/Projects';
import { getProjects } from '../data/getData';

const ProjectsPage = () => {
  const { data: projects } = useQuery('projects', getProjects);
  // useEffect(() => {
  //   if (isError) {
  //     toast('Il y a une erreur', { className: 'errorToast' });
  //   }
  // }, [isError]);

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div>
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

              <Projects data={projects} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
