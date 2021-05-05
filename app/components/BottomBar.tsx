import React from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';

import colors from '../constants/colors';
import PrimaryButton from './PrimaryButton';

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: colors.white,
  },
});

function BottomBar(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reset</Text>
      <PrimaryButton />
      <Text style={styles.text}>Next</Text>
    </View>
  );
}

export default BottomBar;
