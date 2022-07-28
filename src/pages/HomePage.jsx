import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { getProjects, getUser, getTasks } from '../data/getData';
import Select from '../components/forms/selects/Select';
import UserBoard from '../components/home/UserBoard';
import loginCtx from '../loginCtx';
import LoginPage from './LoginPage';

const HomePage = () => {
  const { data: tasks } = useQuery('tasks', getTasks);
  const [project, setProject] = useState();
  const { isLogged } = useContext(loginCtx);
  const { data: projects, isError, isFetching } = useQuery('projects', getProjects);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);

  const { data: user } = useQuery('user', getUser);

  console.log(user);

  useEffect(() => {
    console.log(`Request for value ${project}`);
  }, [project]);

  return (
    <>
      {isLogged ? (
        <div className="flex flex-col max-w-7xl space-y-2 mx-auto">
          <div className="border border-zinc-600 rounded-3xl py-6 p-3">
            {user && <UserBoard data={user} />}
          </div>

          <div className="flex justify-between p-3">
            <div className=" rounded-lg p-3 h-[20vh]">
              <h2 className="ml-4 text-3xl font-bold text-left mr-6 mb-8">Projets</h2>
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
            <div className="rounded-lg p-3 w-full h-full border border-zinc-400">
              <h2 className="ml-4 text-3xl font-bold text-left">Tâches</h2>
              {tasks && !isFetching && <TasksListHome data={tasks} />}
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};
export default HomePage;
