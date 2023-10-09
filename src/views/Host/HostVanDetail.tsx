import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { Van } from "../../types/interfaces";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { vanTypeButtonColor } from "../../utils/functions";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../scss/host-van-detail.scss";

const HostVanDetail = () => {
  const [van, setVan] = useState<Van | null>(null);
  const { id } = useParams();

  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link nav__link active-link" : "nav-link nav__link";
  };

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  if (!van) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="host-van">
      <Link to=".." relative="path" className="underline-link">
        <HiOutlineArrowLongLeft />
        Back to all vans
      </Link>
      <div className="host-van__tile">
        <div className="host-van__tile__top">
          <img src={van.imageUrl} alt="Van Picture" />
          <div className="host-van__tile__top__text">
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
          </div>
        </div>
        <Navbar expand className="dashboard-nav">
          <Navbar.Collapse
            id="dashboard-navbar"
            className="justify-content-between"
          >
            <Nav>
              <NavLink to="." end className={activeClass}>
                Details
              </NavLink>
              <NavLink to="price" className={activeClass}>
                Pricing
              </NavLink>
              <NavLink to="photos" className={activeClass}>
                Photos
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Outlet />
      </div>
    </section>
  );
};

export default HostVanDetail;