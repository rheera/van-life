import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Van } from "../types/interfaces";
import { vanTypeButtonColor } from "../utils/functions";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../scss/van-detail.scss";

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState<Van | null>(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className="van-detail">
      <Container className="site-page">
        <Link to="/vans" className="underline-link">
          <HiOutlineArrowLongLeft />
          Back to all vans
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
