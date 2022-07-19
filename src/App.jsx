import React, { useEffect, useState, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/ui/Header';
import Sidebar from './components/ui/SideBar';
import LoginCtx from './loginCtx';
import ProfilePage from './pages/ProfilePage';
import AddTasks from './pages/AddTasks';
import ProjectsPage from './pages/ProjectsPage';
import AddUser from './pages/AddUser';
import LoginPage from './pages/LoginPage';
import TasksCard from './components/lists/TasksCard';

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
            <Sidebar />
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
                      <TasksCard />
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
          </div>
        </Router>
      </LoginCtx.Provider>
    </QueryClientProvider>
  );
};

export default App;
