import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Van } from "../../types/interfaces";
import "../../scss/host-vans.scss";

const HostVans = () => {
  const [vanData, setVanData] = useState<Van[]>([]);
  const [zoomVan, setZoomVan] = useState<string | number | null>(null);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const displayVanData = vanData.map((van) => {
    return (
      <Link
        onMouseEnter={() => setZoomVan(van.id)}
        onMouseLeave={() => setZoomVan(null)}
        key={`van-${van.id}`}
        to={`/host/vans/${van.id}`}
      >
        <div className="host-vans__all-vans__van-tile">
          <div
            className={`zoom-img ${
              zoomVan === van.id ? "zoom-img--zoomed" : ""
            }`}
          >
            <img src={van.imageUrl} alt={`${van.name} Van Image`} />
          </div>{" "}
          <div className="host-vans__all-vans__van-tile__van-text">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="host-vans">
      <h2>Your listed vans</h2>
      {vanData.length > 0 ? (
        <div className="host-vans__all-vans">{displayVanData}</div>
      ) : (
        <h3>Loading...</h3>
      )}
    </section>
  );
};

export default HostVans;
