import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1>Welcome to ContactBook App</h1>
      <p>Register or Login to start managing your contacts.</p>
    </div>
  );
};

export default Home;
