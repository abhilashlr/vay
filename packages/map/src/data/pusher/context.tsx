import {  createContext,  ReactElement,  useContext, ReactNode } from "react";
import Pusher from 'pusher-js';

type PusherContextProps = {
  pusher: Pusher;
};

const PusherContext = createContext<PusherContextProps>({} as PusherContextProps);

export const PusherProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const pusher = new Pusher('02b8635829d09f169dd4', {
    cluster: 'ap2'
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
    throw new Error(
      'usePusher must be used within PusherProvider',
    );
  }

  return context;
};
