import { useEffect, useState } from 'react';
import { updateProject } from '../../../data/getData';

const SelectCheckBox = ({ data, element, reloadData, cancelFunction }) => {
  console.log(data, 'woooo');
  const [isChecked, setIsChecked] = useState(
    element.users.length
      ? element.users.map((e) => `${e.id}`).filter((id) => element.userCreator.id !== id)
      : [],
  );
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
    await updateProject({ id: element.id, users: isChecked });
    await reloadData();
  };
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  return (
    <>
      {data.users.map((user) => (
        <div key={user.id}>
          {element.userCreator.id !== user.id && (
            <div className="flex items-center">
              <input
                className="mr-4"
                value={user.id}
                defaultChecked={isChecked.includes(`${user.id}`)}
                onChange={toggle}
                type="checkbox"
              />
              <label>{user.name}</label>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-around">
        <button type="submit" className="btn  bg-green-500" onClick={confirmValue}>
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
        <button onClick={cancelFunction} type="button" className="btn cancel">
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
export default SelectCheckBox;
