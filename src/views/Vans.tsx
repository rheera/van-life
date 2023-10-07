import { useState, useEffect } from "react";
import { Van } from "../types/interfaces";
import { VanTypes } from "../types/enums";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Vans = () => {
  const [vanData, setVanData] = useState<Van[]>([]);

  useEffect(() => {
    const getVanData = async () => {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVanData(data.vans);
    };
    getVanData();
  }, []);

  // Map through the enums with each type of Van, add types there when new types of vans added
  const displayVanFilters = Object.keys(VanTypes).map((type) => {
    return (
      <Button key={`filter-${type}`} className="vans__filters__button">
        {type}
      </Button>
    );
  });

  const vanTypeButtonColor = (type: VanTypes) => {
    return type === VanTypes.simple
      ? "warning"
      : type === VanTypes.luxury
      ? "dark"
      : "success";
  };

  const displayVanData = vanData.map((van) => (
    <div key={van.id} className="vans__all-vans__van">
      <img src={van.imageUrl} alt={`${van.name} Van Image`} />
      <div className="vans__all-vans__van__text">
        <h3>{van.name}</h3>
        <div className="vans__all-vans__van__text__price">
          <p>${van.price}</p>
          <span>/day</span>
        </div>
      </div>
      <Button variant={vanTypeButtonColor(van.type)}>{van.type}</Button>
    </div>
  ));

  return (
    <section className="vans">
      <Container className="site-page">
        <h2>Explore our van options</h2>
        <div className="vans__filters">
          {displayVanFilters}{" "}
          <button className="vans__filters__clear">Clear filters</button>
        </div>
        <div className="vans__all-vans">{displayVanData}</div>
      </Container>
    </section>
  );
};

export default Vans;
