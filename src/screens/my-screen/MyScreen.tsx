import React from 'react';
import {View} from 'react-native';

import {GivenComponent, MyComponent} from '../../components';
import {dump} from '../../constants/dump';

import {styles} from './styles';

const MyScreen = () => {
  // Changing this value will toggle the component I edited vs the component given to me for testing
  // true -> My component renders
  // false -> Given component renders
  const isMyComponent = true;

  return (
    <View style={styles.container}>
      {isMyComponent ? (
        // This is the component that I worked on
        <MyComponent data={dump} />
      ) : (
        // This is the component given to me to identify issues
        <GivenComponent data={dump} />
      )}
    </View>
  );
};

export default MyScreen;
