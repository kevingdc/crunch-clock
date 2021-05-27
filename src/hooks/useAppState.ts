import {useRef, useEffect, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';

export default function useAppState(): boolean {
  const [isActive, setIsActive] = useState(true);
  const appState = useRef(AppState.currentState);

  function _handleAppStateChange(nextAppState: AppStateStatus): void {
    if (
      appState.current === 'active' &&
      nextAppState.match(/inactive|background/)
    ) {
      setIsActive(false);
    } else if (nextAppState.match(/active/)) {
      setIsActive(true);
    }

    appState.current = nextAppState;
  }

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  return isActive;
}
