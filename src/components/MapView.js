import { React } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView({ maps }) {
  // console.log(maps);
  // if (!maps.longitude || !maps.latitude) {
  //   return <h1 className="text-center">Map View</h1>;
  // }

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Map View</h1>
        <MapContainer
          center={[27.807245, 85.455791]}
          zoom={16}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {maps.map((val) => (
            <Marker
              key={[val.latitude, val.longitude]}
              position={
                [val.latitude, val.longitude]
                // ([27.807245, 85.455791],
                // [27.809245, 85.451791],
                // [27.800245, 85.459791])
              }
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapView;
