import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Van } from "../../types/interfaces";
import Container from "react-bootstrap/Container";
import "../../scss/host-vans.scss";

const HostVans = () => {
  const [vanData, setVanData] = useState<Van[]>([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const displayVanData = vanData.map((van) => {
    return (
      <div key={`van-${van.id}`} className="host-vans__all-vans__van-tile">
        <div className="zoom-img">
          <img src={van.imageUrl} alt={`${van.name} Van Image`} />
        </div>{" "}
        <div className="host-vans__all-vans__van-tile__van-text">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    );
  });

  return (
    <section className="host-vans">
      <Container className="">
        <h2>Your listed vans</h2>
        <div className="host-vans__all-vans">{displayVanData}</div>
      </Container>
    </section>
  );
};

export default HostVans;
