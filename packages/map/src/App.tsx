import { FC } from 'react';
import { PusherProvider } from './data/pusher/context';
import { MapPage } from './pages';

export const App: FC = () => {
  return (
    <PusherProvider>
      <MapPage />
    </PusherProvider>
  );
};
