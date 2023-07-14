import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';

const Contacts = ({ contacts, deleteItem }) => {
  return (
    <div className={css.list}>
      {contacts.map(el => (
        <Contact contacts={el} key={el.id} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default Contacts;
