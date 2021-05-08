import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {ClockContext} from '../context/clockContext';
import Type from '../context/type';
import colors from '../constants/colors';

const circleSize = Dimensions.get('screen').height * 0.25;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderColor: colors.primary,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: 60,
  },
});

function TimeDisplay(): JSX.Element {
  const {dispatch} = useContext<ClockContextType>(ClockContext);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch({type: Type.TOGGLE_CLOCK})}>
      <View style={styles.circle}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
          1:30
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default TimeDisplay;
