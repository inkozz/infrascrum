import ProjectsCard from './ProjectsCard';

const Projectscard = ({ data }) => (
  <tbody>
    {data && data.map((element) => <ProjectsCard key={element.id} project={element} />)}
  </tbody>
);

export default Projectscard;
