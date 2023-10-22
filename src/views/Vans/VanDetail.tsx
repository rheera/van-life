import { Van } from "../../types/interfaces";
import { vanTypeButtonColor } from "../../utils/functions";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
  ActionFunctionArgs,
} from "react-router-dom";
import { Suspense } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { getVan } from "../../api/api";
import "../../scss/van-detail.scss";

export const loader = async ({ params }: ActionFunctionArgs) => {
  return defer({ van: getVan(params.id as string) });
};

const VanDetail = () => {
  const location = useLocation();
  const vanPromise = useLoaderData() as { van: Promise<Van> };

  const search = location.state?.search || "";

  const typeOfGoBackVans = location.state?.filterType || "all";

  return (
    <section className="van-detail main-content">
      <Container className="site-page">
        <Link to={`..${search}`} relative="path" className="underline-link">
          <HiOutlineArrowLongLeft />
          Back to {typeOfGoBackVans} vans
        </Link>
        <Suspense fallback={<h2>Loading Van...</h2>}>
          <Await resolve={vanPromise.van}>
            {(van) => (
              <>
                <Image src={van.imageUrl} alt="Van Image" fluid />
                <Button
                  className="van-type-badge"
                  variant={vanTypeButtonColor(van.type)}
                  disabled
                >
                  {van.type}
                </Button>
                <h3>{van.name}</h3>
                <div className="van-name-price">
                  <p>
                    ${van.price}
                    <span>/day</span>
                  </p>
                </div>
                <p className="van-detail__description">{van.description}</p>
                <Button className="big-button" variant="warning">
                  Rent this van
                </Button>
              </>
            )}
          </Await>
        </Suspense>
      </Container>
    </section>
  );
};

export default VanDetail;
