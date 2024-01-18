import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar-collapse collapse" id="navbar-responsive">
        <ul className="navbar-nav me-auto">
          <li>
            <NavLink className="nav-link px-lg-3" to="/courses">
              Все курсы~~
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link px-lg-3" to="/webinars">
              Бесплатно
            </NavLink>
          </li>
          <li>
            <div className="dropdown text-body-secondary">
              <button
                aria-haspopup="true"
                aria-label="О Стаслете"
                className="btn border-0 dropdown-toggle nav-link px-lg-3 x-btn-focus-visible"
                data-bs-toggle="dropdown"
              >
                О Стаслете
              </button>
              <div className="dropdown-menu dropdown-menu-start">
                <NavLink className="dropdown-item" to="/pages/about">
                  О компании
                </NavLink>
                <NavLink className="dropdown-item" to="/blog">
                  Блог
                </NavLink>
                <NavLink className="dropdown-item" to="/testimonials">
                  Отзывы студентов
                </NavLink>
                <NavLink className="dropdown-item" to="/teams">
                  Компаниям
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
        <div className="col-auto text-lg-end py-2 py-lg-0">
          <NavLink className="btn btn-outline-secondary me-2" to="/session/new">
            Вход
          </NavLink>
          <NavLink className="btn btn-outline-secondary" to="/user/new">
            Регистрация
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
