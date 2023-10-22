import { Outlet } from "react-router";
import { Van } from "../../types/interfaces";
import { Suspense } from "react";
import { NavLink, Link, useLoaderData, defer, Await } from "react-router-dom";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { vanTypeButtonColor } from "../../utils/functions";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../scss/host-van-detail.scss";
import { ContextType } from "../../types/types";
import { getVan } from "../../api/api";
import { requireAuth } from "../../utils/functions";

export const loader = async ({
  params,
  request,
}: {
  params: { id: string };
  request: Request;
}) => {
  await requireAuth(request);
  return defer({ van: getVan(params.id as string) });
};

const HostVanDetail = () => {
  const van = useLoaderData();

  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link nav__link active-link" : "nav-link nav__link";
  };

  function renderVan(van: Van) {
    return (
      <>
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
        <Outlet context={{ van } satisfies ContextType} />
      </>
    );
  }

  return (
    <section className="host-van">
      <Link to="/host/vans" className="underline-link">
        <HiOutlineArrowLongLeft />
        Back to all vans
      </Link>
      <div className="host-van__tile">
        <Suspense fallback={<h2>Loading your van...</h2>}>
          <Await resolve={(van as { van: Van }).van}>{renderVan}</Await>
        </Suspense>
      </div>
    </section>
  );
};

export default HostVanDetail;
