type Status = 'NOT_STARTED' | 'RUNNING' | 'PAUSED';

type State = {
  status: Status;
  startTime: number;
  elapsedTime: number;
  set: number;
};

type ActionType =
  | 'TOGGLE CLOCK'
  | 'NEXT_SET'
  | 'NEXT_WORKOUT'
  | 'RESET'
  | 'INCREMENT_TIME';

type Action = {
  type: ActionType;
};

type ClockContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
