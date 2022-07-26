import { useEffect } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { getTasks, getProjects, getUser } from '../data/getData';
import Tasks from '../components/lists/Tasks';
<<<<<<< HEAD
import ProjectsCards from '../components/lists/ProjectsCards';
=======
import Projectscards from '../components/lists/ProjectsCards';
>>>>>>> 7b59958659e8c45378f7cce28edae29a7cec6bf8

const ProfilePage = () => {
  const { data: tasks, isError, isFetching } = useQuery('tasks', getTasks);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);
  const { data: projects } = useQuery('projects', getProjects);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);

    getUser()

  return (
    <div className="flex flex-col max-w-6xl mx-auto space-y-4 ">
      <div className="bg-primary rounded-3xl py-6 p-3">
        <div>
          <h1 className="text-2xl text-white text-center">Bonjour,</h1>
          <h2 className="text-white text-center">User</h2>
        </div>
      </div>
      <div className="flex justify-between space-x-5">
        <div className="bg-yellow-500 rounded-lg sm:h-[70vh] py-6 w-full h-[80vh] p-3">
          <h2 className="m-4 text-3xl font-bold text-center mb-0">Projets</h2>
          {projects && !isFetching && <ProjectsCards data={projects} />}
        </div>
        <div className="bg-primary rounded-lg sm:h-[70vh] py-6 w-full h-[80vh] p-3">
          <h2 className="m-4 text-3xl font-bold text-center">Taches</h2>
          {tasks && !isFetching && <Tasks data={tasks} />}
        </div>
        <div className="hidden md:inline-block bg-purple-500 rounded-lg py-6 w-full p-3">
          <h2 className="m-4 text-3xl font-bold text-center">Terminé</h2>
        </div>
      </div>
      <div className=" md:hidden bg-purple-500 rounded-lg py-6 w-full p-3">card 4</div>
      <div className="bg-blue-500 rounded-lg py-6 p-3">card 5</div>
    </div>
  );
};
export default ProfilePage;
