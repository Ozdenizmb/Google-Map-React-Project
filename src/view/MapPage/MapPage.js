import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import './MapPage.css';
import { addLocations, addAddress } from '../../data/LocalData';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MapPage = (props) => {
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [routeCoordinates, setRouteCoordinates] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 41.01384, lng: 28.94966 });
    const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);
    const [address, setAddress] = useState('');

    const mapStyles = { height: '85vh', width: '100%' };
    const apiKey = "GOOGLE-MAP-API-KEY";

    useEffect(() => {
        if (selectedLocations.length > 1) {
            calculateRoute(selectedLocations);
            setIsSaveButtonActive(true);
        }
        else {
            setIsSaveButtonActive(false);
        }
    }, [selectedLocations]);

    const calculateRoute = async (locations) => {
        const waypoints = locations.slice(1, -1).map(location => ({
            location: new window.google.maps.LatLng(location.lat, location.lng),
            stopover: true
        }));

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route({
            origin: new window.google.maps.LatLng(locations[0].lat, locations[0].lng),
            destination: new window.google.maps.LatLng(locations[locations.length - 1].lat, locations[locations.length - 1].lng),
            waypoints: waypoints,
            optimizeWaypoints: true,
            travelMode: window.google.maps.TravelMode.DRIVING
        }, (response, status) => {
            if (status === 'OK') {
                setRouteCoordinates(response.routes[0].overview_path.map(point => ({
                    lat: point.lat(),
                    lng: point.lng()
                })));
            } else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };

    const onMapClick = (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setSelectedLocations(prevLocations => [...prevLocations, newLocation]);
        setMapCenter(newLocation);
    };

    const handleSaveButtonClick = () => {
        addLocations(selectedLocations);
        addAddress(searchHistory);
        props.history.push('/');
    }

    const handleSelect = async (value) => {
        setAddress(value);
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            setSelectedLocations(prevLocations => [...prevLocations, latLng]);
            setMapCenter(latLng);
        } catch (error) {
            console.error('Error', error);
        }
        setSearchHistory(prevHistory => [...prevHistory, value]);
    }

    return (
        <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="google-map-search-bar">
                        <input
                            {...getInputProps({
                                placeholder: 'Yer adı girin...',
                                className: 'location-search-input',
                            })}
                        />
                        <FontAwesomeIcon icon={faSearch} className="input-icon" />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={mapCenter}
                onClick={onMapClick}
            >
                {selectedLocations.map((location, index) => (
                    <Marker key={index} position={location} />
                ))}
                {routeCoordinates.length > 0 && (
                    <Polyline
                        path={routeCoordinates}
                        options={{
                            strokeColor: "#FF0000",
                            strokeOpacity: 1.0,
                            strokeWeight: 2
                        }}
                    />
                )}
                {isSaveButtonActive ? (
                    <button className="map-page-button-style-active" onClick={handleSaveButtonClick}>
                        Geziyi Kaydet
                    </button>
                ) : <button className="map-page-button-style-passive">
                        Geziyi Kaydet
                    </button>
                }
            </GoogleMap>
        </LoadScript>
    );
};

export default MapPage;
