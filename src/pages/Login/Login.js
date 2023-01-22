import React from 'react';
import { Link } from 'react-router-dom';
import loginstyle from './Login.module.css';

function Login() {
  return (
    <div className={loginstyle.container}>
      <div className={loginstyle.content}>
        <header>Login</header>
        <form method="post" action="/api/login">
          <div className={loginstyle.field}>
            <input type="text" placeholder="ИмяПользователя" name="login" />
          </div>
          <div className={loginstyle.field}>
            <span />
            <input type="password" placeholder="100500" name="password" />
          </div>
          <div className={loginstyle.field}>
            <input type="submit" value="Login" />
          </div>
          <div className={loginstyle.register}>Ещё нет учётной записи?</div>
          <span>
            <Link className={loginstyle.button} to="/register">
              Заведите!
            </Link>
          </span>
          <span>
            <Link className={loginstyle.button} to="/">
              Назад
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
export default Login;
