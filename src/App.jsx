import React, { useEffect, useState, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/ui/Header';
import Sidebar from './components/ui/SideBar';
import LoginCtx from './loginCtx';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';
import AddUser from './pages/AddUser';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import EditProjects from './pages/EditProjects';
import AddProjet from './pages/AddProjet';
import AddTasks from './pages/AddTasks';

import EditTasks from './pages/EditTasks';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('isLogged')) {
      setIsLogged(true);
    }
  }, []);
  const contextValue = useMemo(
    () => ({ setIsLogged, isLogged }),
    [setIsLogged, isLogged],
  );
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LoginCtx.Provider value={contextValue}>
        <Router>
          <div className="flex max-w-full bg-slate-200 w-full min-h-screen relative">
            {isLogged ? <Sidebar /> : null}
            <main className="flex-grow">
              <Routes>
                <Route path="/" index element={<LoginPage />} />
                <Route
                  path="home"
                  element={
                    <>
                      <Header />
                      <ProfilePage />
                    </>
                  }
                />
                <Route path="/home/notifications" element={<Header />} />
                <Route
                  path="/home/taches"
                  element={
                    <>
                      <Header />
                      <TasksPage />
                    </>
                  }
                />
                <Route
                  path="/home/taches/:id"
                  element={
                    <>
                      <Header />
                      <EditTasks />
                    </>
                  }
                />
                <Route
                  path="/addtasks"
                  element={
                    <>
                      <Header />
                      <AddTasks />
                    </>
                  }
                />
                <Route
                  path="/home/projets"
                  element={
                    <>
                      <Header />
                      <ProjectsPage />
                    </>
                  }
                />
                <Route
                  path="/home/projets/:id"
                  element={
                    <>
                      <Header />
                      <EditProjects />
                    </>
                  }
                />
                <Route
                  path="/addprojects"
                  element={
                    <>
                      <Header />
                      <AddProjet />
                    </>
                  }
                />
                <Route
                  path="/adduser"
                  element={
                    <>
                      <Header />
                      <AddUser />
                    </>
                  }
                />
              </Routes>
            </main>
            <Toaster
              position="top-center"
              toastOptions={{ duration: 2000, className: 'toastStyle' }}
            />
          </div>
        </Router>
      </LoginCtx.Provider>
    </QueryClientProvider>
  );
};

export default App;
