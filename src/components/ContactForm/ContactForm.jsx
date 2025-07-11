import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
    number: Yup.string()
    .matches(
      /^\+?[0-9\s-]{7,15}$/,
      'Phone number must be 7–15 digits and may include +, spaces or -'
    )
    .required('Phone number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
    initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm, setFieldError }) => {
        const exists = contacts.some(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );
        if (exists) {
          setFieldError('name', `${values.name} is already in your contacts`);
          return;
        }
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="e.g. John Doe" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.field}>
          <label htmlFor="number">Phone</label>
<Field id="number" name="number" />
<ErrorMessage name="number" component="div" />
          </div>

          <button type="submit" disabled={Object.keys(errors).length > 0}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
