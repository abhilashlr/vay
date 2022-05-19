// import { simulatorData } from "./7routes";
import { simulatorData } from "./heavy-duty";

const LOCATION = 'Hamburg';

export const routeMassager = () => {
  const trackMap: { [key: string]: { lat: number; lng: number; }[] } = {};

   simulatorData.data.trackData.forEach((t, i) => {
    trackMap[`${LOCATION}-${i}`] = t.map((x) => ({
      lat: x.lat,
      lng: x.lon
    }));
  });

  return trackMap
}