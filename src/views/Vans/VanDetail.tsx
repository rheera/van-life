import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Van } from "../../types/interfaces";
import { vanTypeButtonColor } from "../../utils/functions";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { getVan } from "../../api/api";
import "../../scss/van-detail.scss";

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState<Van | null>(null);
  const location = useLocation();

  const search = location.state?.search || "";

  const typeOfGoBackVans = location.state?.filterType || "all";

  useEffect(() => {
    getVan(params.id as string).then((data) => setVan(data));
  }, [params.id]);

  return (
    <section className="van-detail main-content">
      <Container className="site-page">
        <Link to={`..${search}`} relative="path" className="underline-link">
          <HiOutlineArrowLongLeft />
          Back to {typeOfGoBackVans} vans
        </Link>
        {van ? (
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
        ) : (
          <h2>Loading</h2>
        )}
      </Container>
    </section>
  );
};

export default VanDetail;
