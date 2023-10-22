import { useState } from "react";
import { Link, useAsyncValue } from "react-router-dom";
import { Van } from "../types/interfaces";

const ListVans = ({ amtOfVansToShow = 10 }: { amtOfVansToShow: number }) => {
  const vans = useAsyncValue() as Van[];

  const [zoomVan, setZoomVan] = useState<string | number | null>(null);

  const displayVanData = vans.slice(0, amtOfVansToShow).map((van) => {
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

  return <div className="host-vans__all-vans">{displayVanData}</div>;
};

export default ListVans;
