import "../scss/footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__text">
      <span className="copyright">©</span> {new Date().getFullYear()} #VANLIFE
    </div>
  </footer>
);

export default Footer;
