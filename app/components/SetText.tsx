import React from 'react';
import {Text, StyleSheet} from 'react-native';
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
  return <Text style={styles.text}>Set #1</Text>;
}

export default SetText;
