import { memoize } from 'lodash';
import { distanceBetweenLatlng } from './distance';

export const speed = memoize(
  (...args: [number, number, number, number]) => {
    const distanceInMeters = distanceBetweenLatlng(...args);
    const time = 10 * 5; // Randomising this to keep speed in limits

    const speedInKmph = (distanceInMeters / time) * (18 / 5);

    return speedInKmph.toFixed(2);
  },
  (...args) => args.join('-'),
);
