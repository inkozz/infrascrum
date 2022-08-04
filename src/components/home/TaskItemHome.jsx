import { useQuery } from 'react-query';
import { useState } from 'react';
import { getAllUsers } from '../../data/getData';
import SelectAssignUser from '../forms/selects/SelectAssignUser';

const TaskItemHome = ({ data }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { data: allUsers, refetch: reloadData } = useQuery('allUsers', getAllUsers);
  const cancelAddUser = () => {
    setIsAdd(false);
  };

  return (
    <div>
      <div className="bg-blue-300 w-64 h-40 m-4 rounded-lg">
        <div className="bg-white w-64 h-40 mt-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
          <div className="text-sm font-semibold text-gray-700 m-4 leading-6">
            <p>{data.name}</p>
            <p>{data.priority}</p>
            <p>{data.description}</p>
          </div>
          {!isAdd ? (
            <div className="flex justify-end h-2">
              <button type="button" onClick={() => setIsAdd(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 cursor-pointer hover:text-[#7FFF00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            ''
          )}

          {isAdd ? (
            <div className="flex flex-row justify-around">
              <SelectAssignUser
                data={allUsers}
                cancelFunction={cancelAddUser}
                reloadData={reloadData}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItemHome;
