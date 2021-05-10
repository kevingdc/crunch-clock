import Type from './type';
import Status from './status';

function reducer(state: State, action: Action): State {
  switch (state.status) {
    case Status.NOT_STARTED:
      return handleNotStarted(state, action);
    case Status.RUNNING:
      return handleRunning(state, action);
    case Status.PAUSED:
      return handlePaused(state, action);
  }
}

function handleNotStarted(state: State, action: Action): State {
  switch (action.type) {
    case Type.TOGGLE_CLOCK:
    case Type.NEXT_SET:
      return {
        ...state,
        status: Status.RUNNING,
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
    case Type.TOGGLE_CLOCK:
      return {...state, status: Status.PAUSED};
    case Type.NEXT_SET:
      return handleNextSet(state);
    case Type.NEXT_WORKOUT:
      return handleNextWorkout(state);
    case Type.RESET:
      return handleReset(state);
    case Type.INCREMENT_TIME:
      const elapsedTime = Math.min(Date.now() - state.startTime, 3600000);
      const status = elapsedTime < 3600000 ? Status.RUNNING : Status.PAUSED;

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
    case Type.TOGGLE_CLOCK:
      const newTime = Date.now();
      return {
        ...state,
        status: Status.RUNNING,
        startTime: state.elapsedTime ? newTime - state.elapsedTime : newTime,
      };
    case Type.NEXT_SET:
      return handleNextSet(state);
    case Type.NEXT_WORKOUT:
      return handleNextWorkout(state);
    case Type.RESET:
      return handleReset(state);
    default:
      return state;
  }
}

function handleNextSet(state: State): State {
  return {
    ...state,
    status: Status.RUNNING,
    set: state.set + 1,
    startTime: Date.now(),
    elapsedTime: 0,
  };
}

function handleNextWorkout(state: State): State {
  return {
    ...state,
    status: Status.RUNNING,
    set: 1,
    startTime: Date.now(),
    elapsedTime: 0,
  };
}

function handleReset(state: State): State {
  return {
    ...state,
    status: Status.NOT_STARTED,
    set: 0,
    startTime: 0,
    elapsedTime: 0,
  };
}

export default reducer;
