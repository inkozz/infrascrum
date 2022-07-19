import ProjectsCard from './ProjectsCard';

const Projectscards = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data && data.map((element) => <ProjectsCard key={element.id} project={element} />)}
    </div>
  );
};

export default Projectscards;
