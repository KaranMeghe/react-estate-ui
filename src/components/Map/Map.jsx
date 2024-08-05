import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Pin } from "../index";

const Map = ({ data }) => {
  return (
    <MapContainer
      center={[51.5074, -0.1278]}
      zoom={8}
      scrollWheelZoom={false}
      key={data.id}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item) => {
        return <Pin place={item} key={item.id} />;
      })}
    </MapContainer>
  );
};

export default Map;
