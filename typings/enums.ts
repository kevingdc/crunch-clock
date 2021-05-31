export enum Status {
  NotStarted = 'NOT_STARTED',
  Running = 'RUNNING',
  Paused = 'PAUSED',
}

export enum ActionType {
  ToggleClock = 'TOGGLE_CLOCK',
  NextSet = 'NEXT_SET',
  NextWorkout = 'NEXT_WORKOUT',
  Reset = 'RESET',
  IncrementTime = 'INCREMENT_TIME',
}
