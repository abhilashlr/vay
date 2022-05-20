import Pusher from 'pusher-js';
import { createContext, ReactElement, useContext, ReactNode } from 'react';

type PusherContextProps = {
  pusher: Pusher;
};

const PusherContext = createContext<PusherContextProps>(
  {} as PusherContextProps,
);

export const PusherProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const pusher = new Pusher('b21791b6356e9b0999ab', {
    cluster: 'mt1',
  });

  return (
    <PusherContext.Provider value={{ pusher }}>
      {children}
    </PusherContext.Provider>
  );
};

export const usePusher = (): PusherContextProps => {
  const context = useContext(PusherContext);

  if (context === undefined) {
    throw new Error('usePusher must be used within PusherProvider');
  }

  return context;
};
