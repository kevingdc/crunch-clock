import {useContext} from 'react';

import {ClockContext} from '../context/clockContext';
import Status from '../context/status';
import useAppState from '../hooks/useAppState';
import {pushNotification, clearNotifications} from '../util/notifications';

function Notifier() {
  const {state} = useContext<ClockContextType>(ClockContext);
  const {status} = state;
  const isActive = useAppState();

  if (isActive) {
    clearNotifications();
  } else {
    if (status === Status.RUNNING) {
      pushNotification('Running. Tap to open.');
    } else if (status === Status.PAUSED) {
      pushNotification('Paused. Tap to open.');
    }
  }

  return null;
}

export default Notifier;
