import { useRef } from 'react';
import SideCard from '../components/SideCard';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const email = useRef();
  const password = useRef();
  const username = useRef();

  const handleSignup = (e) => {
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enteredUsername = username.current.value;

    console.log(enteredEmail, enteredPassword, enteredUsername);
    
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 py-5">
          <div className="pb-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-lg-5">
                <h1 className="mb-4 fw-light">Регистрация</h1>
                <div className="pt-lg-3">
                  <form className="simple_form new_user_sign_up_form" id="new_user_sign_up_form">
                    <div className="mb-2 email required user_sign_up_form_email">
                      <label className="form-label email required" htmlFor="user_email">
                        Электронная почта <span title="обязательно">*</span>
                      </label>
                      <input
                        className="form-control string email required"
                        id="user_email"
                        autoComplete="username"
                        autoFocus="autofocus"
                        ref={email}
                        type="email"
                        name="user_sign_up_form[email]"
                      />
                    </div>
                    <div className="mb-2 string optional user_sign_up_form_first_name">
                      <label
                        className="form-label string optional"
                        htmlFor="user_sign_up_form_first_name"
                      >
                        Имя <span title="обязательно">*</span>
                      </label>
                      <input
                        className="form-control string optional"
                        ref={username}
                        type="text"
                        name="user_sign_up_form[first_name]"
                        id="user_sign_up_form_first_name"
                      />
                    </div>
                    <div className="mb-2 password optional user_sign_up_form_password">
                      <label className="form-label password optional" htmlFor="new-password">
                        Пароль <span title="обязательно">*</span>
                      </label>
                      <input
                        ref={password}
                        className="form-control password optional"
                        id="new-password"
                        autoComplete="new-password"
                        type="password"
                        name="user_sign_up_form[password]"
                      />
                    </div>
                    <input
                      type="submit"
                      name="commit"
                      value="Зарегистрироваться"
                      className="btn btn-primary w-100"
                      data-disable-with="Зарегистрироваться"
                      onClick={() => handleSignup()}
                    />
                    <div className="mt-3">
                      <div className="small text-body-secondary lh-sm">
                        Отправляя форму, вы принимаете «
                        <NavLink
                          to="/pages/personal_data"
                          className="text-body-secondary"
                          target="_blank"
                          rel="nofollow"
                        >
                          Соглашение об обработке персональных данных
                        </NavLink>
                        » и условия «
                        <NavLink
                          to="/pages/offer"
                          className="text-body-secondary"
                          target="_blank"
                          rel="nofollow"
                        >
                          Оферты
                        </NavLink>
                        », а также соглашаетесь с «
                        <NavLink
                          to="/pages/tos"
                          className="text-body-secondary"
                          target="_blank"
                          rel="nofollow"
                        >
                          Условиями использования
                        </NavLink>
                        »
                      </div>
                    </div>
                  </form>
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
                          value="ekiuX3lXSD6DaknosDpFkO1H1Na3fbOBXffRrBRART6HKjIquEBTQTpKbcWhmg3h0A9BYHarQCGRoUolz2tfdQ"
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
                          value="ekiuX3lXSD6DaknosDpFkO1H1Na3fbOBXffRrBRART6HKjIquEBTQTpKbcWhmg3h0A9BYHarQCGRoUolz2tfdQ"
                          autocomplete="off"
                        />
                      </form>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="card-footer border-top-0 text-center py-4">
                <div className="py-lg-2">
                  <span className="text-body-secondary">Уже есть аккаунт?</span>
                  <NavLink className="text-body" to="/session/new">
                    Войти
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
export default Signup;
