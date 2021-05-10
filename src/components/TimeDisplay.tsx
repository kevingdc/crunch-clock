import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {ClockContext} from '../context/clockContext';
import useInterval from '../util/useInterval';
import Status from '../context/status';
import Type from '../context/type';
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
  const [start, stop, running] = useInterval(() => {
    dispatch({type: Type.INCREMENT_TIME});
  }, 200);

  useEffect(() => {
    if (state.status === Status.RUNNING) {
      if (!running) {
        start();
      }
    } else {
      stop();
    }

    return () => stop();
  }, [state, start, stop, running]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch({type: Type.TOGGLE_CLOCK})}>
      <View style={styles.circle}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
          {formatTime(state.elapsedTime)}
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
