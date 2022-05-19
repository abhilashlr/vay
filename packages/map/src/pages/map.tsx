import { LatLngLiteral } from "leaflet";
import { uniqBy } from "lodash";
import { FC, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { usePusher } from "../data/pusher";
import { speed } from "../utils/speed";

type MarkerExpression = LatLngLiteral & {
  vin: string;
  speed?: string;
}

export const MapPage: FC = () => {
  const {pusher} = usePusher();
  const [positions, setPositions] = useState<MarkerExpression[]>([]);
  
  const channel = pusher.subscribe('vay-locations');
  channel.bind('BATCH_UPDATE', function({locations}: { locations: MarkerExpression[] }) {
    setPositions(locations);
  });
  channel.bind('UPDATE', function({ vin, lat, lng }: MarkerExpression) {
    setPositions(positions.map((position) => position.vin === vin ? {
      ...position,
      lat,
      lng,
      speed: speed(position.lat, position.lng, lat, lng),
    } : position));
  });
  channel.bind('ADD', function({locations}: { locations: MarkerExpression[] }) {
    setPositions(uniqBy([...positions, ...locations], 'vin'));
  });
  channel.bind('REMOVE', function({ vin }: MarkerExpression) {
    setPositions(positions.filter((position) => position.vin !== vin));
  });

  return (
    <MapContainer center={[53.54409817874157, 9.989905750150973]} zoom={11} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

        {positions.map((marker) => {
          return (<Marker position={[marker.lat, marker.lng]} key={marker.vin}>
            <Popup>
              Vehicle vin: {marker.vin}<br />
              Speed of vehicle: {marker.speed} km/h
            </Popup>
          </Marker>)
        })}

    </MapContainer>
  );
}