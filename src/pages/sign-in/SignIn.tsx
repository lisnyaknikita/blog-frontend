import classes from './SignIn.module.scss';

const SignIn: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <form className={classes.form}>
          <h3>Авторизація</h3>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Авторизуватися</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
