const LoginFooter = () => {
  return (
    <footer className="footer-register">
      <div className="container">
        <div className="footer-register__top">
          <a className="footer-register__logo logo" href="#">
            <img
              src="img/logo.svg"
              alt="Логотип ресторана"
              width="81"
              height="35"
            />
          </a>
        </div>
        <div className="footer-register__bottom">
          <a
            className="footer-register__link"
            href="mailto:totable.info@gmail.com"
          >
            totable.info@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LoginFooter;
