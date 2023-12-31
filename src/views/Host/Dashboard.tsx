import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "../../scss/dashboard.scss";
import ListVans from "../../components/ListVans";
import { getHostVans } from "../../api/api";
import { Van } from "../../types/interfaces";
import { requireAuth } from "../../utils/functions";

export const loader = async ({ request }: { request: Request }) => {
  await requireAuth(request);
  return defer({ vans: getHostVans("123") });
};

const Dashboard = () => {
  const vanData = useLoaderData() as { vans: Promise<Van[]> };

  return (
    <>
      <section className="dashboard">
        <div className="dashboard__card dashboard__income">
          <div className="dashboard__card__left last-30-days">
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
        <Suspense fallback={<h2>Loading your vans...</h2>}>
          <Await resolve={vanData.vans}>
            <ListVans amtOfVansToShow={2} />
          </Await>
        </Suspense>
      </section>
    </>
  );
};

export default Dashboard;
