import React, { useEffect, useState, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/ui/Header';
import Sidebar from './components/ui/SideBar';
import LoginCtx from './loginCtx';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import AddUserPage from './pages/AddUserPage';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('isLogged')) {
      localStorage.clear('isLogged');
    }
  }, []);
  const contextValue = useMemo(
    () => ({ setIsLogged, isLogged }),
    [setIsLogged, isLogged],
  );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <LoginCtx.Provider value={contextValue}>
        <Router>
          <div className="flex max-w-full w-full min-h-screen relative">
            {!isLogged ? null : <Sidebar />}
            <main className="flex-grow">
              <Routes>
                <Route path="/" index element={<LoginPage />} />
                <Route
                  path="home"
                  element={
                    <>
                      <Header />

                      <HomePage />
                    </>
                  }
                />
                <Route
                  path="taches"
                  element={
                    <>
                      <Header />
                      <TasksPage />
                    </>
                  }
                />
                <Route
                  path="projets"
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
                      <AddUserPage />
                    </>
                  }
                />
                <Route path="/home/notifications" element={<Header />} />
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
