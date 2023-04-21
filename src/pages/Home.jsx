import * as React from "react";
import Base from "../components/Base";
import { isLoggedIn } from "../authorization/auth";
const LazyNotes = React.lazy(() => import("../components/Notes"));

const Home = () => {
  React.useEffect(() => {
    isLoggedIn();
  });
  return (
    <>
      <Base />
      {isLoggedIn() ? (
        <React.Suspense fallback="Loading...">
          <LazyNotes />
        </React.Suspense>
      ) : (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          accusamus harum totam rem sapiente tenetur enim veritatis eligendi
          voluptatibus, sit, similique odit obcaecati id cum ex quo aut, et
          quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          repellat quam quod tempore numquam itaque unde hic dolore tempora
          perferendis neque eligendi totam, alias sunt sit maiores maxime illum
          quidem.
        </div>
      )}
    </>
  );
};

export default Home;
