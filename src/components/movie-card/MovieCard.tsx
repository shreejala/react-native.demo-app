import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';

interface MovieCardType {
  name?: string;
  onCardPress?: () => void;
  customStyles?: StyleProp<ViewStyle>;
  textColor: string;
}

const MovieCard = ({
  name = 'Movie',
  onCardPress,
  customStyles = {},
  textColor,
}: MovieCardType) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardPress = () => {
    setIsSelected(!isSelected);
    onCardPress?.();
  };

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.itemStyle, customStyles])}
      onPress={handleCardPress}>
      <Text
        style={StyleSheet.flatten({
          color: textColor,
        })}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
