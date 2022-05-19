import axios  from 'axios';
import { routeMassager } from './constants';

export const updatablePositions = routeMassager();

export const simulatableVehicles = Object.keys(updatablePositions).map((pos) => {
  return {
    vin: pos,
    ...updatablePositions[pos][0],
  }
})

export const FleetServiceApi = {
  addPositions() {
    return axios.post('/api/vehicles', simulatableVehicles)
  },

  updatePositionOfVehicle(vin: string, index: number) {
    const data = updatablePositions[vin]?.[index];

    if (!data) {
      return Promise.resolve({ done: true });
    }

    return axios.put(`/api/vehicles/${vin}`, data).then(({ data }) => data);
  },

  removeVehicle(vin: string) {
    return axios.delete(`/api/vehicles/${vin}`).then(({ data }) => data);

  }
}