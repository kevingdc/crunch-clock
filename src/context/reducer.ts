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
      return {...state, status: Status.RUNNING, set: 1, elapsedTime: 0};
    default:
      return state;
  }
}

function handleRunning(state: State, action: Action): State {
  switch (action.type) {
    case Type.TOGGLE_CLOCK:
      return {...state, status: Status.PAUSED};
    case Type.NEXT_SET:
      return {...state, set: state.set + 1, elapsedTime: 0};
    case Type.NEXT_WORKOUT:
      return {...state, set: 1, elapsedTime: 0};
    case Type.RESET:
      return {...state, status: Status.NOT_STARTED, set: 0, elapsedTime: 0};
    case Type.INCREMENT_TIME:
      const elapsedTime = state.elapsedTime + 1;
      // If elapsedTime reaches 1 hour, stop
      return {
        ...state,
        elapsedTime,
        status: elapsedTime < 3600 ? Status.RUNNING : Status.NOT_STARTED,
      };
    default:
      return state;
  }
}

function handlePaused(state: State, action: Action): State {
  switch (action.type) {
    case Type.TOGGLE_CLOCK:
      return {...state, status: Status.RUNNING};
    case Type.NEXT_SET:
      return {...state, set: state.set + 1, elapsedTime: 0};
    case Type.NEXT_WORKOUT:
      return {...state, set: 1, elapsedTime: 0};
    case Type.RESET:
      return {...state, status: Status.NOT_STARTED, set: 0, elapsedTime: 0};
    default:
      return state;
  }
}

export default reducer;
