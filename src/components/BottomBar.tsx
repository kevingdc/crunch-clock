import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ClockContext} from '../context/clockContext';
import {Status, ActionType} from '../../types/enums';
import colors from '../constants/colors';
import PrimaryButton from './PrimaryButton';
import TextButton from './TextButton';

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
});

function BottomBar(): JSX.Element {
  const {state, dispatch} = useContext<ClockContextType>(ClockContext);

  const started = state.status !== Status.NotStarted;

  return (
    <View style={styles.container}>
      {started && (
        <TextButton
          onPress={() => dispatch({type: ActionType.Reset})}
          text="Reset"
        />
      )}
      <PrimaryButton />
      {started && (
        <TextButton
          onPress={() => dispatch({type: ActionType.NextWorkout})}
          text="Next"
        />
      )}
    </View>
  );
}

export default BottomBar;
