import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Van } from "../../types/interfaces";
import { VanTypes } from "../../types/enums";
import { vanTypeButtonColor } from "../../utils/functions";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Vans = () => {
  const [vanData, setVanData] = useState<Van[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get("type");

  const handleQueryChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const filteredVans = filterType
    ? vanData.filter(({ type }) => type === filterType)
    : vanData;

  // Map through the enums with each type of Van, add types there when new types of vans added
  const displayVanFilters = Object.keys(VanTypes).map((type) => {
    return (
      <Button
        onClick={() => handleQueryChange("type", type)}
        key={`filter-${type}`}
        className={`vans__filters__button vans__filters__button--${type} ${
          filterType === type ? `vans__filters__button--${type}--selected` : ""
        }`}
      >
        {type}
      </Button>
    );
  });
  const displayVanData = filteredVans.map((van) => (
    <div key={van.id} className="vans__all-vans__van">
      <Link to={`/vans/${van.id}`}>
        <div className="zoom-img">
          <img src={van.imageUrl} alt={`${van.name} Van Image`} />
        </div>
      </Link>
      <Link to={`/vans/${van.id}`}>
        <div className="vans__all-vans__van__text">
          <h3>{van.name}</h3>
          <div className="vans__all-vans__van__text__price van-name-price">
            <p>${van.price}</p>
            <span>/day</span>
          </div>
        </div>
      </Link>
      <Button
        onClick={() => handleQueryChange("type", van.type)}
        variant={vanTypeButtonColor(van.type)}
        className="van-type-badge"
      >
        {van.type}
      </Button>
    </div>
  ));

  return (
    <section className="vans main-content">
      <Container className="site-page">
        <h2>Explore our van options</h2>
        <div className="vans__filters">
          {displayVanFilters}
          {filterType && (
            <button
              onClick={() => handleQueryChange("type", null)}
              className="underline-link vans__filters__clear"
            >
              Clear filters
            </button>
          )}
        </div>
        {vanData.length > 0 ? (
          <div className="vans__all-vans">{displayVanData}</div>
        ) : (
          <h3>Loading...</h3>
        )}
      </Container>
    </section>
  );
};

export default Vans;
