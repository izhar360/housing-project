import React, { useEffect, useState } from "react";
import defaultBg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import { projects } from "../data";
import Title from "../components/Title";
import useWindowDimensions from "../components/usewindow";

/**
 * @author
 * @function Project
 **/

const Prices = (props) => {
  let { slug } = useParams();
  const [project, setProject] = useState();
  const { width } = useWindowDimensions();

  console.log(slug);

  useEffect(() => {
    const projectx = projects.find((project) => project.slug === slug);
    setProject(projectx);
  }, []);

  console.log(project);

  if (!project) {
    return (
      <div className="error">
        <h3>no such room coluld be found...</h3>
        <Link to="/apartments" className="btn-primary">
          back to apartments
        </Link>
      </div>
    );
  }

  const { name, picture } = project;

  return (
    <div>
      <StyledHero img={picture || defaultBg}>
        <Banner title={`${name}`}>
          <Link to="/" className="btn-primary">
            Go Back
          </Link>
        </Banner>
      </StyledHero>

      <div style={{ marginTop: width > 576 ? "40px" : "35px" }}>
        <Title title="Prices" />
      </div>

      <div className="prices-div">
        <img src={project.pay1} width="100%" height="100%" />
        <img src={project.pay2} width="100%" height="100%" />
        <img src={project.pay3} width="100%" height="100%" />
        <img src={project.pay4} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Prices;
