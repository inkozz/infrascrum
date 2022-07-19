import ProjectsCard from './ProjectsCard';

const Projectscards = ({ data }) => {
  console.log(data);
  return (
    <tbody>
      {data && data.map((element) => <ProjectsCard key={element.id} project={element} />)}
    </tbody>
  );
};

export default Projectscards;
