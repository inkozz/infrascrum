import ProjectsCard from './ProjectsCard';

const Projects = ({ data }) => (
  <div>
    {data && data.map((element) => <ProjectsCard key={element.id} project={element} />)}
  </div>
);

export default Projects;
