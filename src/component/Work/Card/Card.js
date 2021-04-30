import React from "react";
import './styles.scss';

const Card = ({image,title,desc,url,btn}) => {
  return (
    <div className="work">
      <img className="image__img" src={image} alt="Amazon Homepage" />
      <div className="image__overlay">
        <h4 className="image__title">{title}</h4>
        <p className="image__desc">
          {desc}
        </p>
        <a  rel="noreferrer"  target="_blank" href={url}>
          <button className="image__link">{btn}</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
