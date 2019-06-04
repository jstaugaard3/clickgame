import React from 'react'
import "./piccard.css";

const PicCard = props => {
  console.log(props.id + " " + props.image);
  return(
 <div className="row">
  <div className="card" id={props.id} onClick={props.imageClick}>
    <div className="card-image">
      <img className="image-responsive" alt={props.image} id={props.id} src={require('../../images/' + props.image)} />
    </div>
  </div>
  </div>

);
  }

export default PicCard;