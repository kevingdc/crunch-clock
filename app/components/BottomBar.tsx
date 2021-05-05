import React from 'react';
import {View, StyleSheet} from 'react-native';

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
  return (
    <View style={styles.container}>
      <TextButton onPress={() => console.log('Reset')} text="Reset" />
      <PrimaryButton />
      <TextButton onPress={() => console.log('Next')} text="Next" />
    </View>
  );
}

export default BottomBar;
