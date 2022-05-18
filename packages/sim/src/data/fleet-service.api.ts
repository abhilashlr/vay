import axios  from 'axios';
import { updatablePositions, vehiclePositions } from './constants';

export const FleetServiceApi = {
  addPositions() {
    return axios.post('/api/add', vehiclePositions)
  },

  updatePositionOfVehicle(vin: string, index: number) {
    const data = updatablePositions[vin][index];

    console.log(data, vin, index)

    if (!data) {
      return Promise.resolve({ done: true });
    }

    return axios.post(`/api/update/${vin}`, data).then(({ data }) => data);
  }
}