import { Link } from "react-router-dom";
import HostVans from "./HostVans";
import { AiFillStar } from "react-icons/ai";
import "../../scss/dashboard.scss";
import ListVans from "../../components/ListVans";

const Dashboard = () => (
  <>
    <section className="dashboard">
      <div className="dashboard__card dashboard__income">
        <div className="dashboard__card__left">
          <h2>Welcome!</h2>
          <p>
            Income last <span>30 days</span>
          </p>
          <h4>$2,260</h4>
        </div>
        <div className="dashboard__card__right">
          <Link to="income">Details</Link>
        </div>
      </div>
      <div className="dashboard__card dashboard__review">
        <div className="dashboard__card__left">
          <h3>
            Review score <AiFillStar /> 5.0/5
          </h3>
        </div>
        <div className="dashboard__card__right">
          <Link to="reviews">Details</Link>
        </div>
      </div>
      <div className="dashboard__card dashboard__vans">
        <div className="dashboard__card__left">
          <h3>Your listed vans</h3>
        </div>
        <div className="dashboard__card__right">
          <Link to="vans">View all</Link>
        </div>
      </div>
      <ListVans amtOfVansToShow={2} />
    </section>
  </>
);

export default Dashboard;
