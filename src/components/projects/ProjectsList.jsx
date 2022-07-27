import ProjectItem from './ProjectItem';

const ProjectsList = ({ data, reloadData }) => {
  console.log('ok');
  return (
    <>
      {data.length === 0 ? (
        <div className="text-2xl" name="tableEmpty">
          Aucun projet dans la BDD
        </div>
      ) : (
        'Projects'
      )}
      {data.map((element) => (
        <ProjectItem key={element.id} element={element} reloadData={reloadData} />
      ))}
    </>
  );
};

export default ProjectsList;
