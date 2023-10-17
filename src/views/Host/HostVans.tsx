import "../../scss/host-vans.scss";
import ListVans from "../../components/ListVans";
import { getHostVans } from "../../api/api";
import { useLoaderData } from "react-router-dom";
import { Van } from "../../types/interfaces";

export const loader = async () => {
  return getHostVans("123");
};

const HostVans = () => {
  const vanData = useLoaderData() as Van[];
  return (
    <section className="host-vans">
      <h2>Your listed vans</h2>
      <ListVans amtOfVansToShow={10} vans={vanData} />
    </section>
  );
};

export default HostVans;
