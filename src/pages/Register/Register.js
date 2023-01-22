import React from 'react';
import { Link } from 'react-router-dom';
import RegisterStyle from '../Login/Login.module.css';

function Register() {
  return (
    <div className={RegisterStyle.container}>
      <div className={RegisterStyle.content}>
        <header>Register</header>
        <form method="post" action="/api/register">
          <div className={RegisterStyle.field}>
            <span />
            <input type="text" placeholder="Админ" name="login" />
          </div>
          <div className={RegisterStyle.field}>
            <span />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className={RegisterStyle.field}>
            <span />
            <input type="password" placeholder="1234" name="password" />
          </div>
          <div className={RegisterStyle.field}>
            <span />
            <input
              className={RegisterStyle.register}
              type="submit"
              value="Register"
            />
          </div>
          <div className={RegisterStyle.login}>Уже зарегистрированы?</div>
          <span>
            <Link className={RegisterStyle.button} to="/login">
              Войти сейчас
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
