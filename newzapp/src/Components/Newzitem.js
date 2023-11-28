import { useState } from "react";
import React  from 'react';

const Newzitem = (props) => {
    const {  title, description,imgurl,newzurl} = props;
    
  return (
    <div className='my-3'>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newzurl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Newzitem;
