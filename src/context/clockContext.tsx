import React, {createContext, useReducer} from 'react';

import Status from './status';
import reducer from './reducer';

type Props = {
  children: React.ReactNode;
};

const initialState = {
  status: Status.NOT_STARTED,
  elapsedTime: 0,
  set: 0,
};

export const ClockContext = createContext<ClockContextType>({
  state: initialState,
  dispatch: () => [],
});

export function ClockProvider({children}: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ClockContext.Provider value={{state, dispatch}}>
      {children}
    </ClockContext.Provider>
  );
}
