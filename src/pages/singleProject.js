/*global google*/
import React, { useEffect, useState } from "react";
import defaultBg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import { projects } from "../data";
import { Map, GoogleApiWrapper } from "google-maps-react";
import useWindowDimensions from "../components/usewindow";

/**
 * @author
 * @function Project
 **/

export const Project = (props) => {
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

  const {
    name,
    picture,
    description,
    location,
    Facilities,
    blocks,
    Accessibility,
    Requirements,
    noObjCertificate,
    Possession,
  } = project;

  const mapStyles = {
    width: width > 576 ? "70vw" : "90vw",
    height: width > 576 ? "60vh" : "40vh",
    margin: "0 auto",
  };

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
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>location</h3>
            <p>{location}</p>
          </article>
        </div>
      </section>
      <section
        style={{
          height: width > 576 ? "60vh" : "40vh",
          margin: width > 576 ? "50px 0" : "40px 0",
        }}
      >
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
        />
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {Facilities.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>

      <section className="room-extras">
        <h6>Blocks</h6>
        <ul className="extras">
          {blocks.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>

      <section className="room-extras">
        <h6>Accessibility</h6>
        <ul className="extras">
          {Accessibility.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>

      <section className="room-extras">
        <h6>Requirements</h6>
        <ul className="extras">
          {Requirements.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>

      <section className="room-extras">
        <h6>No Objection Certificate:</h6>
        <p>{noObjCertificate}</p>
        <h6 style={{ marginTop: "15px" }}>Possession:</h6>
        <p>{Possession}</p>
      </section>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaTmON11bTlCn2_pSwArGhuHJCrAtMdp0",
})(Project);
