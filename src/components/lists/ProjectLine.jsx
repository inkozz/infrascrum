import { NavLink } from 'react-router-dom';

const ProjectLine = ({ project, deleteProject }) => (
  <tr className=" border-b-2 border-gray-200">
    <td className="px-5 py-5  bg-white text-sm  ">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
          <img
            className="w-full h-full rounded-full bg-blue-900"
            src={project.logo}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap cursor-pointer hover:text-primary">
            {project.name}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5  bg-white text-sm flex items-center">
      <img className="w-10 h-10 rounded-full" src={project.logo} alt="" />
      <p className="text-gray-900 whitespace-no-wrap pl-2">ceoName</p>
    </td>
    <td className="px-5 py-5  bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{project.startDate}</p>
    </td>
    <td className="px-5 py-5  bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{project.endDate}</p>
    </td>
    <td className="px-5 py-5  bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">Derniere maj</p>
    </td>
    <td className="px-5 py-5  bg-white text-sm">
      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-[#7FFF00] opacity-50 rounded-full"
        />
        <span className="relative">status</span>
      </span>
    </td>
    <td className="px-5 py-5  bg-white text-sm flex items-center">
      <div className="relative z-30">
        <img className="w-10 h-10 rounded-full" src={project.logo} alt="#" />
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-[#7FFF00] border-2 border-white dark:border-gray-800 rounded-full" />
      </div>
      <div className="relative z-20 -ml-4">
        <img className="w-10 h-10 rounded-full" src={project.logo} alt="logo" />
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-red border-2 border-white dark:border-gray-800 rounded-full" />
      </div>
      <div className="relative z-10 -ml-4">
        <img className="w-10 h-10 rounded-full" src={project.logo} alt="logo" />
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-gray-400 border-2 border-white dark:border-gray-800 rounded-full" />
      </div>
      <div className="h-10 w-10 rounded-full bg-blue-100 z-0 -ml-4">
        <p className="text-xl font-bold text-primary pt-1 pl-2">+5</p>
      </div>
    </td>
    <td>
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
        <NavLink to={`/home/projets/${project.id}`}>
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
        <button type="button" onClick={() => deleteProject(project.id)}>
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
);

export default ProjectLine;
