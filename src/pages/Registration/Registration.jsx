import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

const Registration = () => {
  return (
    <div className={css.container}>
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
