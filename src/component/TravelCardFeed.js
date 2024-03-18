import React from 'react';
import TravelCard from './TravelCard';

const AdvertCardFeed = ({ CoordinateData, AddressData }) => {

    let i = 0;

    const cardIndis = () => {
        i++;
        return i;
    }

    return (
        <div className="row">
          {CoordinateData.map((CoordinateData, index) => (
            <TravelCard key={index} travel={CoordinateData} indis={cardIndis()} allCordinate={CoordinateData} AddressData={AddressData[index]} />
          ))}
        </div>
      );
};

export default AdvertCardFeed;