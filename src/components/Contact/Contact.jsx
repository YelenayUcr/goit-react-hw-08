import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <span>{name}: {phone}</span>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
