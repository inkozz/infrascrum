import ProjectLine from './ProjectLine';

const Projects = ({ data }) => (
  <tbody>
    {data && data.map((element) => <ProjectLine key={element.id} project={element} />)}
  </tbody>
);

export default Projects;
