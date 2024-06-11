import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {MyScreen} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={StyleSheet.flatten({flex: 1})}>
      <MyScreen />
    </SafeAreaView>
  );
};

export default App;
