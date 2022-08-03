import { updateProject } from '../../../data/getData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectCheckBox = ({ data, element, reloadData }) => {
  const navigate = useNavigate();
  console.log('element :::', element);
  const idDuGrosConnard = element.userCreator.id;
  const [isChecked, setIsChecked] = useState(
    element.users.length
      ? element.users.map((e) => `${e.id}`).filter((id) => element.userCreator.id !== id)
      : [],
  );
  const idArray = [];
  const toggle = (e) => {
    const isCheckedEvent = e.target.checked;
    const value = e.target.value;
    if (isCheckedEvent) {
      setIsChecked([...isChecked, value]);
    } else {
      const removeChecked = isChecked.filter((val) => val !== value);
      setIsChecked([...removeChecked]);
    }
  };
  const confirmValue = async () => {
    console.log('isChecked :::', isChecked);
    if (isChecked.includes(idDuGrosConnard)) {
      isChecked.pop(idDuGrosConnard);
    } else {
      console.log('elseeeeeeeeeeeeeeeee');
      await updateProject({ id: element.id, users: isChecked });
      await reloadData();
    }
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
                type="checkbox"></input>
              <label>{user.name}</label>
            </div>
          )}
        </div>
      ))}

      <button type="submit" className="btn primary" onClick={confirmValue}>
        Valider
      </button>
    </>
  );
};
export default SelectCheckBox;
