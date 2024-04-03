// CardComponent.jsx

import React from 'react'; // Importing the CSS file for styling

const Card = ({ imageSrc, name, description, price }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={name} className="card-image" />
            <div className="card-details">
                <h2 className="card-name">Name</h2>
                <p className="card-description">description</p>
                <p className="card-price">24$</p>
            </div>
        </div>
    );
};

export default Card;
