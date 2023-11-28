import React from 'react';

const Menucard = ({ menudata }) => {
  return (
    <section className='main-card--conatiner'>
      {menudata.map((currele, index) => {
        const { name, category, image, description } = currele;
        return (
          <div className='card-container' key={index}>
            <div className='card'>
              <div className='card-body'>
                <span className='card-number card-circle subtle '>{index + 1}</span>
                <span className='card-author subtle'>{category}</span>
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'>
                  {description}
                </span>
                <div className='card-read'>Read</div>
                <img src={image} alt='images' className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menucard;
