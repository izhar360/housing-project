import React from "react";
import Loading from "./Loading";
import Apartment from "./Apartment";
import Title from "./Title";
import { projects } from "../data";

const CurrentOffers = (props) => {
  let projectsx = projects.map((project) => {
    return <Apartment key={project.name} project={project} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="Our Projects" />
      <div className="featured-rooms-center">{projectsx}</div>
    </section>
  );
};

export default CurrentOffers;
