import {Status, ActionType} from '../../types/enums';

function reducer(state: State, action: Action): State {
  switch (state.status) {
    case Status.NotStarted:
      return handleNotStarted(state, action);
    case Status.Running:
      return handleRunning(state, action);
    case Status.Paused:
      return handlePaused(state, action);
  }
}

function handleNotStarted(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ToggleClock:
    case ActionType.NextSet:
      return {
        ...state,
        status: Status.Running,
        set: 1,
        startTime: Date.now(),
        elapsedTime: 0,
      };
    default:
      return state;
  }
}

function handleRunning(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ToggleClock:
      return {...state, status: Status.Paused};
    case ActionType.NextSet:
      return handleNextSet(state);
    case ActionType.NextWorkout:
      return handleNextWorkout(state);
    case ActionType.Reset:
      return handleReset(state);
    case ActionType.IncrementTime:
      const elapsedTime = Math.min(Date.now() - state.startTime, 3600000);
      const status = elapsedTime < 3600000 ? Status.Running : Status.Paused;

      return {
        ...state,
        status,
        elapsedTime,
      };
    default:
      return state;
  }
}

function handlePaused(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ToggleClock:
      const newTime = Date.now();
      return {
        ...state,
        status: Status.Running,
        startTime: state.elapsedTime ? newTime - state.elapsedTime : newTime,
      };
    case ActionType.NextSet:
      return handleNextSet(state);
    case ActionType.NextWorkout:
      return handleNextWorkout(state);
    case ActionType.Reset:
      return handleReset(state);
    default:
      return state;
  }
}

function handleNextSet(state: State): State {
  return {
    ...state,
    status: Status.Running,
    set: state.set + 1,
    startTime: Date.now(),
    elapsedTime: 0,
  };
}

function handleNextWorkout(state: State): State {
  return {
    ...state,
    status: Status.Running,
    set: 1,
    startTime: Date.now(),
    elapsedTime: 0,
  };
}

function handleReset(state: State): State {
  return {
    ...state,
    status: Status.NotStarted,
    set: 0,
    startTime: 0,
    elapsedTime: 0,
  };
}

export default reducer;
