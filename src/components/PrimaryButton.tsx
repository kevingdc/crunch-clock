import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import Emoji from 'react-native-emoji';

import {ClockContext} from '../context/clockContext';
import Type from '../context/type';
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
  image: {
    width: buttonSize,
    height: buttonSize,
  },
});

function PrimaryButton(): JSX.Element {
  const {dispatch} = useContext<ClockContextType>(ClockContext);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch({type: Type.NEXT_SET})}>
      {/* <Emoji name="muscle" style={styles.emoji} /> */}
      <Image
        source={require('../assets/images//bicep/bicep.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

export default PrimaryButton;
