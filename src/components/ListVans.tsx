import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Van } from "../types/interfaces";
import { getHostVans } from "../api/api";

const ListVans = ({ amtOfVansToShow = 10 }) => {
  const [vanData, setVanData] = useState<Van[]>([]);
  const [zoomVan, setZoomVan] = useState<string | number | null>(null);

  useEffect(() => {
    getHostVans("123").then((data) => setVanData(data));
  }, []);

  const displayVanData = vanData.slice(0, amtOfVansToShow).map((van) => {
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

  return vanData.length > 0 ? (
    <div className="host-vans__all-vans">{displayVanData}</div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default ListVans;
