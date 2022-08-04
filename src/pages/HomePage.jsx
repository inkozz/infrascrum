import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { getProjects, getUser, getTasks } from '../data/getData';
import TasksListHome from '../components/home/TasksListHome';
import Select from '../components/forms/selects/Select';
import UserBoard from '../components/home/UserBoard';
import loginCtx from '../loginCtx';
import LoginPage from './LoginPage';
import Loader from '../components/ui/Loader';

const HomePage = () => {
  // const { data: tasks } = useQuery('tasks', getTasks);
  const [project, setProject] = useState();
  const [test, setTest] = useState([]);
  const { isLogged } = useContext(loginCtx);
  const {
    data: projects,
    isError,
    isFetching,
    isLoading,
  } = useQuery('projects', getProjects);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);

  const { data: user } = useQuery('user', getUser);

  useEffect(() => {
    getTasks(project).then((x) => setTest(x.tasks));
  }, [project]);

  console.log(test);

  return (
    <>
      {isLoading && isFetching && <Loader />}
      {isLogged ? (
        <div className="flex flex-col w-5/6 space-y-2 mx-auto">
          <div className=" bg-white shadow-sm rounded-xl py-6 p-3 mt-2">
            {user && !isFetching && <Loader /> && <UserBoard data={user} />}
          </div>

          <div className="flex justify-between p-3">
            <div className=" rounded-lg p-3 h-[20vh] bg-white mr-6">
              <h2 className="ml-4 text-3xl font-bold text-left mr-6 mb-8 text-primary">
                Projet
              </h2>
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
            <div className="rounded-lg p-3 w-full h-full shadow-sm bg-white">
              <h2 className="ml-4 text-3xl font-bold text-left text-primary">Tâches</h2>
              {test && !isFetching && <TasksListHome data={test} />}
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
      <div />
    </>
  );
};
export default HomePage;
