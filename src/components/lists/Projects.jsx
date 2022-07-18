import ProjectLine from './ProjectLine';
import ProjectsCard from './ProjectsCard';

const Projects = ({ data }) => (
  <tbody>
    {data && data.map((element) => <ProjectLine key={element.id} project={element} />)}
  </tbody>
);

export default Projects;
