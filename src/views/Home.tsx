import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../scss/home.scss";

const Home = () => {
  return (
    <section className="home">
      <Container className="site-page">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <h3>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h3>
        <Link to="/vans" className="btn btn-dark" role="button">
          Find your van
        </Link>
      </Container>
    </section>
  );
};

export default Home;
