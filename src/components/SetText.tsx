import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';

import {ClockContext} from '../context/clockContext';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 28,
    textAlign: 'center',
    margin: 20,
  },
});

function SetText(): JSX.Element {
  const {state} = useContext<ClockContextType>(ClockContext);
  const text = state.set > 0 && `Set #${state.set}`;

  return <Text style={styles.text}>{text}</Text>;
}

export default SetText;
