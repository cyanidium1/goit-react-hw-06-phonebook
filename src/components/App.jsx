import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Input from './Input/Input';
import Kek from './SeniorCodingExamples/SeniorCodingExamples';
import AddRandom from './AddRandom/AddRandom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  addcontact,
  deletecontact,
  setStatusFilter,
} from './redux/phonebook/actions';
//comment
export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const search = useSelector(state => state.filters);

  const deleteItem = id => {
    dispatch(deletecontact(id));
  };

  const addItem = (name, tel) => {
    const isExist = contacts.find(
      e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isExist) {
      alert('Already exists');
      return;
    }

    dispatch(addcontact(name, tel));
  };

  const searchItem = input => {
    dispatch(setStatusFilter(input));
  };

  const filteredcontacts = () => {
    return contacts.filter(el =>
      search.status === undefined
        ? el
        : el.name.toLowerCase().includes(search.status.toLowerCase())
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Input searchItem={searchItem} />
      <Contacts contacts={filteredcontacts()} deleteItem={deleteItem} />
      <Form addItem={addItem} />
      <Kek />
      <AddRandom addItem={addItem} />
    </div>
  );
};
