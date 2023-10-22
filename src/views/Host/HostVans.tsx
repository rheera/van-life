import "../../scss/host-vans.scss";
import ListVans from "../../components/ListVans";
import { getHostVans } from "../../api/api";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import { Van } from "../../types/interfaces";
import { requireAuth } from "../../utils/functions";

export const loader = async ({ request }: { request: Request }) => {
  await requireAuth(request);
  return defer({ vans: getHostVans("123") });
};

const HostVans = () => {
  const vanData = useLoaderData();
  return (
    <section className="host-vans">
      <h2>Your listed vans</h2>
      <Suspense fallback={<h2>Loading your vans...</h2>}>
        <Await resolve={(vanData as { vans: Van[] }).vans}>
          <ListVans amtOfVansToShow={10} />
        </Await>
      </Suspense>
    </section>
  );
};

export default HostVans;
