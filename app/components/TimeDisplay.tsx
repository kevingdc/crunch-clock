import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('screen');

const circleSize = screen.height * 0.25;

const styles = StyleSheet.create({
  container: {
    // width: screen.width
    // margin: 30,
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
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
          1:30
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default TimeDisplay;
