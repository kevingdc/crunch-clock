import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {ClockContext} from '../context/clockContext';
import useInterval from '../hooks/useInterval';
import {Status, ActionType} from '../../typings/enums';
import colors from '../constants/colors';

const circleSize = Dimensions.get('screen').height * 0.25;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderColor: colors.primary,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: 80,
    padding: 10,
  },
});

function TimeDisplay(): JSX.Element {
  const {state, dispatch} = useContext<ClockContextType>(ClockContext);
  const status = state.status;
  const [visible, setVisible] = useState(true);
  const [start, stop, running] = useInterval(
    () => {
      if (status === Status.Running) {
        setVisible(true);
        dispatch({type: ActionType.IncrementTime});
      } else if (status === Status.Paused) {
        setVisible(!visible);
      }
    },
    status === Status.Running ? 200 : 500,
  );

  useEffect(() => {
    if (status === Status.NotStarted) {
      setVisible(true);
      stop();
    } else if (!running) {
      start();
    }
  }, [status, start, stop, running]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch({type: ActionType.ToggleClock})}>
      <View style={styles.circle}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
          {visible && formatTime(state.elapsedTime)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function formatTime(time: number): string {
  const secs = Math.floor(time / 1000);
  const sString = Math.floor(secs % 60).toString();

  const mins = Math.floor(secs / 60);
  const mString = mins.toString();

  if (mins > 0) {
    return `${mString}:${sString.padStart(2, '0')}`;
  } else {
    return sString;
  }
}

export default TimeDisplay;
