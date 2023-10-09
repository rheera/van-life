import { useVan } from "../../hooks/useVan";

const HostVanPrice = () => {
  const { van } = useVan();
  return (
    <section className="host-van-price">
      <div className="van-name-price">
        <p>
          ${van?.price.toFixed(2)}
          <span>/day</span>
        </p>
      </div>
    </section>
  );
};

export default HostVanPrice;
