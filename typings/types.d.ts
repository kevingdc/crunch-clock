import {Status, ActionType} from './enums';

declare global {
  type State = {
    status: Status;
    startTime: number;
    elapsedTime: number;
    set: number;
  };

  type Action = {
    type: ActionType;
  };

  type ClockContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
  };
}
