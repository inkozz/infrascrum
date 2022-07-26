import ProjectsCard from './ProjectsCard';

const ProjectsCards = ({ data }) => {
  return (
    <div>
      <select>
        {data &&
          data.map((element) => <ProjectsCard key={element.id} project={element} />)}
      </select>
    </div>
  );
};

export default ProjectsCards;
