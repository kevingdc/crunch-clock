import React, {createContext, useReducer} from 'react';

import Status from './status';
import reducer from './reducer';
import store from './store';

type Props = {
  children: React.ReactNode;
};

const initialState = {
  status: Status.NOT_STARTED,
  startTime: 0,
  elapsedTime: 0,
  set: 0,
};

export const ClockContext = createContext<ClockContextType>({
  state: initialState,
  dispatch: () => [],
});

export function ClockProvider({children}: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  store.configure(dispatch);

  return (
    <ClockContext.Provider value={{state, dispatch}}>
      {children}
    </ClockContext.Provider>
  );
}
