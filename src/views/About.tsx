import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import header from "../assets/images/header-about.webp";
import "../scss/about.scss";

const About = () => (
  <section className="about main-content">
    <img src={header} />
    <Container className="site-page">
      <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
      <div className="about__explore">
        <h4>Your destination is waiting.</h4>
        <h4>Your van is ready.</h4>
        <Link to="/vans" className="btn btn-dark" role="button">
          Explore our vans
        </Link>
      </div>
    </Container>
  </section>
);

export default About;
