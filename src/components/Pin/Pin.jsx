import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const Pin = ({ place }) => {
  const position = [place.latitude, place.longitude];
  return (
    <Marker position={position}>
      <Popup>
        <div className="popUpContainer">
          <img src={place.img} alt="Place image" />
          <div className="textContainer">
            <Link to={`/${place.id}`}>{place.title}</Link>
            <span className="bed">{place.bedroom} Bedrooms</span>
            <b>${place.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
