import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ClockContext} from '../context/clockContext';
import Type from '../context/type';
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
  const {dispatch} = useContext<ClockContextType>(ClockContext);

  return (
    <View style={styles.container}>
      <TextButton onPress={() => dispatch({type: Type.RESET})} text="Reset" />
      <PrimaryButton />
      <TextButton
        onPress={() => dispatch({type: Type.NEXT_WORKOUT})}
        text="Next"
      />
    </View>
  );
}

export default BottomBar;
