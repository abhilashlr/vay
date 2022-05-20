// import { simulatorData } from "./7routes";
import { simulatorData } from './heavy-duty';

const LOCATION = 'Hamburg';

type TrackMap = { [key: string]: { lat: number; lng: number }[] };

export const routeMassager = (): TrackMap => {
  const trackMap: TrackMap = {};

  simulatorData.data.trackData.forEach((t, i) => {
    trackMap[`${LOCATION}-${i}`] = t.map((x) => ({
      lat: x.lat,
      lng: x.lon,
    }));
  });

  return trackMap;
};
