import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;

    const duplicate = contacts.some(c => c.name.toLowerCase() === name.toLowerCase());
    if (duplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name <input type="text" name="name" required /></label>
      <label>Phone <input type="tel" name="phone" required /></label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
