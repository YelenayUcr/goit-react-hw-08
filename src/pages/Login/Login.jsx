import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.container}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
