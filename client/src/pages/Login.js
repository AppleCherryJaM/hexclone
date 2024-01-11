import { useRef } from 'react';
import SideCard from '../components/SideCard';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleLogin = () => {
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);

    // Fetch ??????
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 py-5">
          <div className="pb-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-lg-4 p-xl-5">
                <h1 className="mb-4 fw-light">Вход</h1>
                <div className="pt-lg-3">
                  <form
                    className="simple_form new_user_sign_in_type"
                    id="new_user_sign_in_type"
                    // novalidate="novalidate"
                    // action="/session"
                    // accept-charset="UTF-8"
                    // method="post"
                    // data-gtm-form-interact-id="0"
                  >
                    <div className="mb-2 email optional user_sign_in_type_email">
                      <label
                        className="form-label email optional"
                        htmlFor="user_sign_in_type_email"
                      >
                        Электронная почта
                      </label>
                      <input
                        className="form-control string email optional"
                        autoComplete="username"
                        autoFocus="autofocus"
                        type="email"
                        ref={email}
                        name="user_sign_in_type[email]"
                        id="user_sign_in_type_email"
                        data-gtm-form-interact-field-id="0"
                      />
                    </div>
                    <div className="mb-2 password optional user_sign_in_type_password">
                      <label className="form-label password optional" htmlFor="current-password">
                        Пароль
                      </label>
                      <input
                        className="form-control password optional"
                        autoComplete="current-password"
                        id="current-password"
                        ref={password}
                        type="password"
                        name="user_sign_in_type[password]"
                        data-gtm-form-interact-field-id="1"
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        type="hidden"
                        name="g-recaptcha-response-data[submit]"
                        id="g-recaptcha-response-data-submit"
                        data-sitekey="6LenGbgZAAAAAM7HbrDbn5JlizCSzPcS767c9vaY"
                        className="g-recaptcha g-recaptcha-response "
                        value="03AFcWeA4YtDV58-1Hf968FH-p02l8MJ0GRNENXmHDoGv49esntTfH2sGxOzSfBqdFzzhDK2FDjfGypIhdB53q28deQABD4uhYMuR_13tEwgkEoWg5Lsho4ZYKg2DErAmCvBx4QGbcHo0m59edtwacSz1liTw02tXoZ-22NbynARBvN8IMN9fYhyzExyxT8eBRN7-mDTaStyQG-L6lSe0AyOxso2mro8gpJzWZbDutzqMZ0eNXB3prD3SVHUID1lPg76PS5smtImm6iwwhXUsryVxUIpLJ0Np4jYmmDhuTebpjRrgxkNoiFDL5ZNT5MDi_v4_tZhQYd2x5Tps2TkTYkEC5GbwlVlsAAO26E-IAsWM1J7V5nn6TFEdYEBx87nOP4Ch4_h7ynloCrWN2onbfI2SQmsOBbXfsd8lwkFIgOJsV2DCPSVeVSlFiec2ipBzKmh8Ui1aCq-tfSiUzrF3FzK5bfji7pm7JGZJbdamkJTxPrfXMQyCFFyJdg2S-t3NfwWct11ZyR_BGSsy1tM5utL4saDrcRh-t40VHagL7OhA1NVVF2kXEFhQ"
                      />
                    </div>
                    <div className="text-end my-3">
                      <NavLink className="text-decoration-none small" to="/remind_password/new">
                        Не помню пароль
                      </NavLink>
                    </div>
                  </form>
                  <input
                    type="submit"
                    name="commit"
                    value="Войти"
                    className="btn btn-primary w-100"
                    id="hexlet-login-form-submit"
                    data-disable-with="Войти"
                    onClick={() => handleLogin()}
                  />
                </div>
                {/* <div className="mt-4 pt-3">
                  <div className="d-flex">
                    <div className="w-100 me-1">
                      <form className="button_to" method="post" action="/auth/github">
                        <button className="btn border w-100" type="submit">
                          <div className="bi bi-github fs-5 lh-1 text-body-secondary"></div>
                        </button>
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="HGjQK3lAQa0k2mnti6VyB9bChBjgKmJmDC38i-aw5r7hCkxeuFda0p36TcCaBTp264oRriH8kcbAe2cCPZv89Q"
                          autocomplete="off"
                        />
                      </form>
                    </div>
                    <div className="w-100 me-1">
                      <form className="button_to" method="post" action="/auth/google_oauth2">
                        <button className="btn border w-100" type="submit">
                          <div className="bi bi-google fs-5 lh-1 text-body-secondary"></div>
                        </button>
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="HGjQK3lAQa0k2mnti6VyB9bChBjgKmJmDC38i-aw5r7hCkxeuFda0p36TcCaBTp264oRriH8kcbAe2cCPZv89Q"
                          autocomplete="off"
                        />
                      </form>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="card-footer border-top-0 text-center py-4">
                <div className="py-lg-2">
                  <span className="text-body-secondary">Нет аккаунта? </span>
                  <NavLink className="text-body" to="/user/new">
                    Создать новый аккаунт
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideCard />
      </div>
    </div>
  );
};

export default Login;
