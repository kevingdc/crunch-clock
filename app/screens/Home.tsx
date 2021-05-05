import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import TimeDisplay from '../components/TimeDisplay';
import SetText from '../components/SetText';
import BottomBar from '../components/BottomBar';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    justifyContent: 'space-between',
  },
  heading: {
    color: colors.white,
    fontSize: 24,
    textAlign: 'center',
  },
});

function Home(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.darkBackground}
      />

      <Text style={styles.heading}>Crunch Clock</Text>
      <View>
        <SetText />
        <TimeDisplay />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
}

export default Home;
