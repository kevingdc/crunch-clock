import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Emoji from 'react-native-emoji';

import colors from '../constants/colors';

const buttonSize = 60;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
  },
});

function PrimaryButton(): JSX.Element {
  return (
    <TouchableOpacity style={styles.container}>
      <Emoji name="muscle" style={styles.emoji} />
    </TouchableOpacity>
  );
}

export default PrimaryButton;
