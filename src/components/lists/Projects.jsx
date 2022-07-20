import ProjectLine from './ProjectLine';

const Projects = ({ projects, deleteProject }) => (
  <tbody>
    {projects &&
      projects.map((element) => (
        <ProjectLine key={element.id} project={element} deleteProject={deleteProject} />
      ))}
  </tbody>
);

export default Projects;
