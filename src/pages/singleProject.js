import React, { useEffect, useState } from "react";
import defaultBg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import Footer from "../components/Footer";
import { projects } from "../data";

/**
 * @author
 * @function Project
 **/

const Project = (props) => {
  let { slug } = useParams();
  const [project, setProject] = useState();

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
    <div className="page">
      <StyledHero img={picture || defaultBg}>
        <Banner title={`${name}`}>
          <Link to="/" className="btn-primary">
            Go Back
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="test"
          />
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="test"
          />
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="test"
          />

          {/* {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })} */}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              gravida pharetra libero nec fringilla. Vivamus vitae finibus diam.
              Praesent vel turpis eget est euismod pharetra ut varius tortor.
              Pellentesque vitae nibh nec arcu dictum ornare. Maecenas interdum
              eros augue, et congue turpis laoreet sed. Morbi posuere velit id
              nulla rutrum, nec aliquet justo sodales. Phasellus tristique,
              risus id blandit iaculis, ipsum felis commodo sem, a ornare ligula
              risus vitae neque. Fusce non augue vehicula, dapibus nulla ut,
              imperdiet justo. Nunc congue nunc eget finibus pretium. Maecenas
              lobortis, purus eu suscipit laoreet, nisi diam consequat justo,
              sed sodales erat lacus vitae dui. Vivamus vestibulum libero ipsum,
              sit amet posuere mauris aliquam eu.
            </p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>XYZ : 20000 PLN</h6>
            <h6>
              size : 20 acres<sup>2</sup>
            </h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          <li>- Plush pillows and breathable bed linens</li>
          <li>- Adequate safety/security</li>
          <li>- Full-sized, pH-balanced toiletries</li>
          <li>- Comfortable jets</li>
          <li>- Free Money</li>
          {/* {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })} */}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Project;
