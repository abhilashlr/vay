import { FC } from "react";
import { useMutation } from "react-query";
import { FleetServiceApi } from "../../data/fleet-service.api";


export const SimulatorPage: FC = () => {
  const startSimulationMutation = useMutation('simlator-start', () => FleetServiceApi.addPositions())

  const startSimulation = () => {
    startSimulationMutation.mutateAsync();
  }

  const simulatePositionOfVehicle = () => {
    let idx = 0;
    const updaterInterval = setInterval(() => {
      FleetServiceApi.updatePositionOfVehicle('18', idx).then(({ done }) => {
        if (!done) {
          idx = idx + 1;
        } else {
          clearInterval(updaterInterval);
        }
      });
    }, 1000)
  }

  return (
    <form>
      <fieldset>
        <h2>Begin simulation</h2>
        <button type="button" onClick={startSimulation} disabled={startSimulationMutation.isLoading}>Simulate</button>
      </fieldset>

      <fieldset>
        <button type="button" onClick={simulatePositionOfVehicle} disabled={!startSimulationMutation.isSuccess}>Update Vehicle position</button>
      </fieldset>
    </form>
  )
}