import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import header from "../assets/images/header-home.webp";

import "../scss/home.scss";

const Home = () => {
  const bgImg = { backgroundImage: `url(${header})` };
  return (
    <section className="home" style={bgImg}>
      <Container className="site-page">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <h3>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h3>
        <Link to="/vans">
          <Button variant="warning">Find your van</Button>
        </Link>
      </Container>
    </section>
  );
};

export default Home;
