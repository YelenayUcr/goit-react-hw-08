import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label>Email <Field type="email" name="email" /></label>
        <label>Password <Field type="password" name="password" /></label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
