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
        startTime: getNewTime(),
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
      let status: Status = Status.RUNNING;
      let elapsedTime = getNewTime() - state.startTime;

      // If elapsedTime reaches 1 hour, stop
      const maxTime = 3600000;
      if (elapsedTime >= maxTime) {
        status = Status.NOT_STARTED;
        elapsedTime = maxTime;
      }

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
      return {
        ...state,
        status: Status.RUNNING,
        startTime: state.elapsedTime
          ? getNewTime() - state.elapsedTime
          : getNewTime(),
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
    set: state.set + 1,
    startTime: getNewTime(),
    elapsedTime: 0,
  };
}

function handleNextWorkout(state: State): State {
  return {...state, set: 1, startTime: getNewTime(), elapsedTime: 0};
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

function getNewTime(): number {
  return new Date().getTime();
}

export default reducer;
