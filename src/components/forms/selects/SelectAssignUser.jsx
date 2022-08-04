import { useState, useEffect } from 'react';
import { updateTask } from '../../../data/getData';

const SelectAssignUser = ({ data, project, cancelFunction, reloadData }) => {
  const [isChecked, setIsChecked] = useState([]);
  const toggle = (e) => {
    const isCheckedEvent = e.target.checked;
    const { value } = e.target;
    if (isCheckedEvent) {
      setIsChecked([...isChecked, value]);
    } else {
      const removeChecked = isChecked.filter((val) => val !== value);
      setIsChecked([...removeChecked]);
    }
  };
  const confirmValue = async () => {
    console.log('isChecked :::', isChecked);
    await updateTask({ id: project.id, users: isChecked });
    reloadData();
  };
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  return (
    <>
      {data.users.map((user) => (
        <div key={user.id}>
          <div className="flex items-center">
            <input
              className="mr-2"
              value={user.id}
              // defaultChecked={isChecked.includes(`${user.id}`)}
              onChange={toggle}
              type="checkbox"
            />
            <label>{user.name}</label>
          </div>
        </div>
      ))}
      <div className="flex justify-around">
        <button type="submit" className="btn bg-green-500" onClick={confirmValue}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <button onClick={cancelFunction} type="submit" className="btn cancel">
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SelectAssignUser;
