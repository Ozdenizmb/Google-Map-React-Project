import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { CoordinateData } from '../../data/LocalData';

const NextStepMapPage = ({ coordinates }) => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (CoordinateData && CoordinateData.length > 0) {
            const newMarkers = CoordinateData.map((coordinate, index) => ({
                id: index,
                position: coordinate
            }));
            setMarkers(newMarkers);
        }
    }, [coordinates]);

    const mapStyles = { height: '85vh', width: '100%' };
    const apiKey = "GOOGLE-MAP-API-KEY";

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={coordinates && coordinates.length > 0 ? coordinates[0] : { lat: 41.01384, lng: 28.94966 }}
            >
                {markers.map(marker => (
                    <Marker key={marker.id} position={marker.position} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default NextStepMapPage;
