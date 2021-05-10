import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

type Props = {
  onPress(): void;
  text: string;
};

function TextButton({onPress, text}: Props): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default TextButton;
