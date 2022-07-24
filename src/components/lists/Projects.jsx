import ProjectLine from './ProjectLine';

const Projects = ({ data, reloadData }) => {
  console.log('ok');
  return (
    <>
      {data.length === 0 ? (
        <div className="text-2xl" name="tableEmpty">
          Aucun projet dans la BDD
        </div>
      ) : (
        ''
      )}
      {data.map((element) => (
        <ProjectLine key={element.id} element={element} reloadData={reloadData} />
      ))}
    </>
  );
};

export default Projects;
