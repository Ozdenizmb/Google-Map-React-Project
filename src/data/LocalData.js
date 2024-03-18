let CoordinateData = [];
let AddressData = [];

const addLocations = (locations) => {
    CoordinateData = [...CoordinateData, ...locations];
};

const addAddress = (address) => {
    AddressData = [...AddressData, ...address];
}

export { CoordinateData, AddressData, addLocations, addAddress };
