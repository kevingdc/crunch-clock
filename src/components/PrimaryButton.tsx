import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

import {ClockContext} from '../context/clockContext';
import {ActionType} from '../../types/enums';
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
  image: {
    width: buttonSize - 10,
    height: buttonSize - 10,
  },
});

function PrimaryButton(): JSX.Element {
  const {dispatch} = useContext<ClockContextType>(ClockContext);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch({type: ActionType.NextSet})}>
      <Image
        source={require('../assets/images/dumbbell/dumbbell.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

export default PrimaryButton;
