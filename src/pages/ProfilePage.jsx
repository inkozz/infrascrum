import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { getTasks, getProjects, getUser } from '../data/getData';
import Tasks from '../components/lists/Tasks';
<<<<<<< HEAD
import Select from '../components/lists/Select';
=======
import ProjectsCards from '../components/lists/ProjectsCards';
<<<<<<< HEAD
import UserBoard from '../components/lists/UserBoard';
=======
>>>>>>> 7f070c95db9d89df516e2a7f87e231f0c73a64f2
>>>>>>> ad469f51dabc64274998c7370290c37b6b2acf34

const ProfilePage = () => {
  const { data: tasks, isError, isFetching } = useQuery('tasks', getTasks);
  const [project, setProject] = useState();
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);
  const { data: projects } = useQuery('projects', getProjects);
<<<<<<< HEAD
  // useEffect(() => {
  //   if (isError) {
  //     toast('Il y a une erreur', { className: 'errorToast' });
  //   }
  // }, [isError]);
  const { data: user } = useQuery('user', getUser);
  console.log(user);
  // useEffect(() =>{
  //   if (isError){
  //     toast('Il y a une erreur', { className: 'errorToast' });
  //   }
  // }, [isError]);

  // getUser();
=======
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);
<<<<<<< HEAD
  useEffect(() => {
    console.log('Request for value ' + project);
  }, [project]);
=======

  getUser();
>>>>>>> 7f070c95db9d89df516e2a7f87e231f0c73a64f2
>>>>>>> ad469f51dabc64274998c7370290c37b6b2acf34

  return (
    <div className="flex flex-col max-w-6xl mx-auto space-y-4 ">
      <div className="bg-primary rounded-3xl py-6 p-3">
        {user && <UserBoard data={user} />}
      </div>
      <div className="flex justify-between space-x-5">
        <div className="bg-yellow-500 rounded-lg sm:h-[70vh] py-6 w-full h-[80vh] p-3">
          <h2 className="m-4 text-3xl font-bold text-center mb-0">Projets</h2>
          {projects && !isFetching && (
            <Select
              data={projects}
              setValue={setProject}
              value={project}
              name="project"
              id="project"
            />
          )}
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
