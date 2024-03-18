import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const TravelCard = ({ travel, indis, allCordinate, AddressData }) => {

  return (
    <div className="col-md-4 mb-4 card_padding">
      <div className="card h-100 border rounded-3 shadow advert-card">
        <Link to={`/next-gen/${allCordinate}`} className="card-link nav-link">
          {/*<img src={travel.image} className="card-img-top rounded-2" alt={travel.title} />*/}
          <div className="card-body">
            {/*<h5 className="card-title">{travel.title}</h5>
            <hr className="my-2" />
            <p className="card-text mb-2">{travel.company}</p>
            <p className="card-text mb-3 text-muted fst-italic">{travel.location}</p>
            <p className="card-text">{travel.description}</p>*/}
            <h5 className="card-title">Durak {indis}</h5>
            <hr className="my-2" />
            <p className="card-text"><b>Adres:</b> {AddressData}</p>
            <p className="card-text">{`Latitude: ${travel.lat}, Longitude: ${travel.lng}`}</p>
            <button className="btn btn-success">Detay</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TravelCard;