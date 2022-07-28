import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { getTasks, getProjects, getUser } from '../data/getData';
import TasksListHome from '../components/home/TasksListHome';
import Select from '../components/forms/selects/Select';
import UserBoard from '../components/home/UserBoard';

const HomePage = () => {
  const { data: tasks, isError, isFetching } = useQuery('tasks', getTasks);
  const [project, setProject] = useState();
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);
  const { data: projects } = useQuery('projects', getProjects);

  const { data: user } = useQuery('user', getUser);

  console.log(user);

  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);

  useEffect(() => {
    console.log(`Request for value ${project}`);
  }, [project]);

  return (
    <div className="flex flex-col max-w-7xl space-y-2 mx-auto">
      <div className="border border-zinc-600 rounded-3xl py-6 p-3">
        {user && <UserBoard data={user} />}
      </div>

      <div className="flex justify-between p-3">
        <div className=" rounded-lg p-3 h-[20vh]">
          <h2 className="ml-2 text-3xl font-bold text-left mr-6 mb-8">Projets</h2>
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
        <div />

        <div className="rounded-lg p-3 w-full h-full border">
          <h2 className="ml-4 text-3xl font-bold text-left">Tâches</h2>
          {tasks && !isFetching && <TasksListHome data={tasks} />}
        </div>
        {/* <div className="hidden md:inline-block border border-zinc-600 rounded-lg py-6 w-full p-3">
          <h2 className="m-4 text-3xl font-bold text-center">Terminé</h2>
        </div> */}
      </div>
      <div className=" md:hidden bg-purple-500 rounded-lg py-6 w-full p-3">card 4</div>
    </div>
  );
};
export default HomePage;
