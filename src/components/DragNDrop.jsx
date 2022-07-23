// import React from 'react';
// import { useDrag } from 'react-dnd';

// export const ProjectsCards = ({ id, name }) => {
//   const [{ isDragging }, dragRef] = useDrag({
//     type: 'pet',
//     item: { id, name },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });
//   return (
//     <div className="dragProject" ref={dragRef}>
//       {name}
//       {isDragging && '😱'}
//     </div>
//   );
// };
