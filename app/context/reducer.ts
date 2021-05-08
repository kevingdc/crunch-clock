import Type from './type';
import Status from './status';

function reducer(state: State, action: Action): State {
  console.log(state);
  console.log(action);
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
      return {...state, status: Status.RUNNING, set: state.set + 1, time: 0};
    default:
      return state;
  }
}

function handleRunning(state: State, action: Action): State {
  switch (action.type) {
    case Type.TOGGLE_CLOCK:
      return {...state, status: Status.PAUSED};
    case Type.NEXT_SET:
      return {...state, set: state.set + 1, time: 0};
    case Type.NEXT_WORKOUT:
      return {...state, set: 1, time: 0};
    case Type.RESET:
      return {...state, status: Status.NOT_STARTED, set: 0, time: 0};
    case Type.INCREMENT_TIME:
      return {...state, time: state.time + 1};
    default:
      return state;
  }
}

function handlePaused(state: State, action: Action): State {
  switch (action.type) {
    case Type.TOGGLE_CLOCK:
      return {...state, status: Status.RUNNING};
    case Type.NEXT_SET:
      return {...state, set: state.set + 1, time: 0};
    case Type.NEXT_WORKOUT:
      return {...state, set: 1, time: 0};
    case Type.RESET:
      return {...state, status: Status.NOT_STARTED, set: 0, time: 0};
    default:
      return state;
  }
}

export default reducer;
