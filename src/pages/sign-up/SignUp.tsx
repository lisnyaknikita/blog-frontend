import classes from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <form className={classes.form}>
          <h3>Реєстрація</h3>
          <input type='text' placeholder='Ваше повне ім’я' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Зареєструватися</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
