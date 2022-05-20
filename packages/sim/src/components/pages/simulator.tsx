import { FC, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import {
  FleetServiceApi,
  simulatableVehicles,
} from '../../data/fleet-service.api';
import { simulatorData } from '../../data/heavy-duty';

export const SimulatorPage: FC = () => {
  const [currentVehicleId, setCurrentVehicleId] = useState(
    simulatableVehicles[0].vin,
  );
  const startSimulationMutation = useMutation('simlator-start', () =>
    FleetServiceApi.addPositions(),
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updaterIntervalPoolRef = useRef<{ [vin: string]: any }>();

  const simulatePositionOfVehicle = (vehicleId: string) => {
    if (!updaterIntervalPoolRef.current) {
      updaterIntervalPoolRef.current = {
        [vehicleId]: {},
      };
    }

    let idx = 0;

    updaterIntervalPoolRef.current[vehicleId] = setInterval(() => {
      FleetServiceApi.updatePositionOfVehicle(vehicleId, idx).then(
        ({ done }) => {
          if (!done) {
            idx = idx + 10;
          } else {
            FleetServiceApi.removeVehicle(vehicleId);

            clearInterval(updaterIntervalPoolRef.current?.[vehicleId]);
          }
        },
      );
    }, 1000);
  };

  const simulateAllVehicles = () => {
    clearInterval(updaterIntervalPoolRef.current?.[currentVehicleId]);

    simulatableVehicles.forEach((vehicle) => {
      simulatePositionOfVehicle(vehicle.vin);
    });
  };

  // Invoke this effect only once.
  useEffect(() => {
    startSimulationMutation.mutateAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <fieldset>
        <h2>Simulation data source (JSON)</h2>
        <textarea
          cols={100}
          readOnly
          rows={5}
          value={JSON.stringify(simulatorData)}
        />
        <p className="text-muted">
          Coming soon - Upload your own JSON or GPX track and simulate!
        </p>
      </fieldset>
      <fieldset>
        <h2>Simulate one vehicle at a time</h2>
        <select onChange={(e) => setCurrentVehicleId(e.target.value)}>
          {simulatableVehicles.map((vehicle) => (
            <option key={vehicle.vin} value={vehicle.vin}>
              {vehicle.vin}
            </option>
          ))}
        </select>
        <button
          disabled={!startSimulationMutation.isSuccess}
          type="button"
          onClick={() => simulatePositionOfVehicle(currentVehicleId)}
        >
          Update Vehicle position
        </button>
      </fieldset>

      <fieldset>
        <h2>Simulate all vehicles</h2>
        <button
          disabled={!startSimulationMutation.isSuccess}
          type="button"
          onClick={simulateAllVehicles}
        >
          Simulate all vehicles
        </button>
      </fieldset>
    </form>
  );
};
