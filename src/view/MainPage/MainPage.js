import React from 'react';
import TravelCardFeed from '../../component/TravelCardFeed'
import { CoordinateData, AddressData } from '../../data/LocalData';
import './MainPage.css';

const MainPage = () => {
    return (
        <div>
            <h1 className="main-page-h1">Turunuzu Düzenleyin</h1>
            <div className="travel-detail">
                <h3 className="main-page-h3">Tur Adı: İstanbul Gezisi</h3>
                <h3 className="main-page-h3">Maliyet: 5430 TL</h3>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <div className="w-75 h-100">

                    <TravelCardFeed CoordinateData={CoordinateData} AddressData={AddressData} />

                </div>
            </div>
        </div>
    );
};

export default MainPage;