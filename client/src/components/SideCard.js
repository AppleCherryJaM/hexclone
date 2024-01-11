const SideCard = () => {
  return (
    <div className="col-md-6 py-md-5 order-md-first">
      <div className="display-5 mb-4 mb-lg-5">Один шаг до аккаунта на&nbsp;Хекслете</div>
      <ul className="list-unstyled">
        <li className="d-flex mb-3">
          <span className="bi bi-check2 fs-5 flex-shrink-0 lh-base me-1"></span>
          <div className="fs-5">
            <p>
              <strong>Бесплатно</strong> учитесь основам программирования
            </p>
          </div>
        </li>
        <li className="d-flex mb-3">
          <span className="bi bi-check2 fs-5 flex-shrink-0 lh-base me-1"></span>
          <div className="fs-5">
            <p>Вступайте в программы, курсы и выбирайте свой формат обучения</p>
          </div>
        </li>
        <li className="d-flex mb-3">
          <span className="bi bi-check2 fs-5 flex-shrink-0 lh-base me-1"></span>
          <div className="fs-5">
            <p>
              Присоединяйтесь к <strong>профессиональному сообществу</strong> и развивайте
              нетворкинг
            </p>
          </div>
        </li>
        <li className="d-flex mb-3">
          <span className="bi bi-check2 fs-5 flex-shrink-0 lh-base me-1"></span>
          <div className="fs-5">
            <p>
              Делитесь своими успехами в блоге студента и получайте за это{' '}
              <strong>доступ к платным курсам</strong>
            </p>
          </div>
        </li>
        <li className="d-flex mb-3">
          <span className="bi bi-check2 fs-5 flex-shrink-0 lh-base me-1"></span>
          <div className="fs-5">
            <p>Участвуйте в обсуждениях к урокам и задавайте вопросы</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideCard;
