import { memoize } from 'lodash';

const M_PI = Math.PI;
const { acos, cos, sin } = Math;

export const distanceBetweenLatlng = memoize(
  (_lat1: number, _long1: number, _lat2: number, _long2: number) => {
    // Convert degrees to radians
    const lat1 = (_lat1 * M_PI) / 180.0;
    const long1 = (_long1 * M_PI) / 180.0;
    const lat2 = (_lat2 * M_PI) / 180.0;
    const long2 = (_long2 * M_PI) / 180.0;

    // radius of earth in metres
    const radius = 6378100;

    // P
    const rho1 = radius * cos(lat1);
    const z1 = radius * sin(lat1);
    const x1 = rho1 * cos(long1);
    const y1 = rho1 * sin(long1);

    // Q
    const rho2 = radius * cos(lat2);
    const z2 = radius * sin(lat2);
    const x2 = rho2 * cos(long2);
    const y2 = rho2 * sin(long2);

    // Dot product
    // eslint-disable-next-line no-mixed-operators
    const dot = x1 * x2 + y1 * y2 + z1 * z2;
    const cosTheta = dot / (radius * radius);
    const theta = acos(cosTheta);

    // Distance in Metres
    return radius * theta;
  },
  (...args) => args.join('-'),
);
