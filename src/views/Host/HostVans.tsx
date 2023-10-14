import "../../scss/host-vans.scss";
import ListVans from "../../components/ListVans";

const HostVans = () => {
  return (
    <section className="host-vans">
      <h2>Your listed vans</h2>
      <ListVans />
    </section>
  );
};

export default HostVans;
