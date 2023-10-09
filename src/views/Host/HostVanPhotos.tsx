import { useVan } from "../../hooks/useVan";
import "../../scss/host-van-photos.scss";

const HostVanPhotos = () => {
  const { van } = useVan();

  return (
    <section className="host-van-photos">
      <img src={van?.imageUrl} alt="Van Picture" />
    </section>
  );
};

export default HostVanPhotos;
