import ProjectLine from './ProjectLine';

const ProjectsLineCom = ({ projects, deleteProject }) => {
  console.log(`${projects}`);
  return (
    <>
      {projects &&
        projects.map((element) => (
          <ProjectLine key={element.id} project={element} deleteProject={deleteProject} />
        ))}
    </>
  );
};

export default ProjectsLineCom;
