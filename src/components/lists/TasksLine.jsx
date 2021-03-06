import { NavLink } from 'react-router-dom';

const TasksLine = ({ task, deleteTask }) => (
  <tbody>
    <tr className=" lg:text-black border-b-2 border-gray-200 hover:bg-blue-100">
      <td className="p-3 font-medium capitalize">{task.name}</td>
      <td className="p-3 text-wrap">{task.taskDescription}</td>
      <td className="p-3">ceoName</td>
      <td>{task.assign}</td>

      <td className="p-3 uppercase">{task.roles}</td>

      <td className="p-3">
        <span className="bg-green-400 text-gray-50 rounded-md px-2">{task.priority}</span>
      </td>
      <td className="p-3">
        <span className=" rounded-md px-2">{task.startDate}</span>
      </td>
      <td className="p-3">
        <span className=" rounded-md px-2">{task.endDate}</span>
      </td>
      <td className="p-3">
        <div className="flex ">
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
          <NavLink to={`/home/taches/${task.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 cursor-pointer hover:text-[#deb887] hover:animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </NavLink>
          <button type="button" onClick={() => deleteTask(task.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-red cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
);

export default TasksLine;
