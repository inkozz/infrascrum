import ProjectsList from './ProjectsList';

const Projects = ({ data }) => (
  <div>
    {data && data.map((element) => <ProjectsList key={element.id} project={element} />)}
  </div>
);

export default Projects;
