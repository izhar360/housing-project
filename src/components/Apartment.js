import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Apartment({ project }) {
  const { name, picture, slug } = project;

  return (
    <article className="room">
      <div className="img-container">
        <img src={picture || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>111 PLN</h6>
          <p>per month</p>
        </div>
        <Link to={`/projects/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Apartment.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
