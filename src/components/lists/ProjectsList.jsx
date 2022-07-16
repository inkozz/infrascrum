const ProjectsList = ({ project }) => (
  <div className="border-b border-gray-400">
    <p>{project.name}</p>
    <p>{project.status}</p>
  </div>
);
export default ProjectsList;
