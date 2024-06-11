import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';

import {MoviesType} from '../../constants/types';
import {styles} from './styles';
import {MovieCard} from '../movie-card';

interface MyComponentProps {
  data: MoviesType[];
}

const MyComponent = ({data}: MyComponentProps) => {
  const [selectedItems, setSelectedItems] = useState<MoviesType[]>([]);
  const [filteredList, setFilteredList] = useState<MoviesType[]>([]);

  const [searchTerm, setSearchTerm] = useState('');

  const listData: MoviesType[] = searchTerm !== '' ? filteredList : data;

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm !== '') {
        setFilteredList(
          data.filter((item: MoviesType) => {
            const toSearchIn = item.name.toLowerCase();
            const searchText = searchTerm.toLowerCase();
            return toSearchIn.includes(searchText);
          }),
        );
      }
    }, 800);
    return () => clearTimeout(delayDebounceFn);
  }, [data, searchTerm]);

  const handleTextChange = (text: string) => {
    setSearchTerm(text);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  const handleCardPress = (item: MoviesType) => {
    const foundIndex = selectedItems.findIndex(itm => itm?.name === item?.name);
    const prevSelectedItems = [...selectedItems];

    if (foundIndex > -1) {
      prevSelectedItems.splice(foundIndex, 1);
      setSelectedItems(prevSelectedItems);
    } else {
      setSelectedItems([...prevSelectedItems, item]);
    }
  };

  const renderListItem = ({item}: {item: MoviesType}) => (
    <MovieCard
      name={item?.name}
      onCardPress={() => handleCardPress(item)}
      customStyles={StyleSheet.flatten({
        backgroundColor: selectedItems?.some(
          (itm: MoviesType) => itm.name === item?.name,
        )
          ? 'rgba(190, 86, 131, 1)'
          : 'rgba(239, 207, 227,1)',
      })}
      textColor={
        selectedItems?.some((itm: MoviesType) => itm.name === item?.name)
          ? 'white'
          : 'black'
      }
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={text => handleTextChange(text)}
          value={searchTerm}
          style={styles.inputStyle}
          placeholder="Search"
          placeholderTextColor="gray"
        />

        <TouchableOpacity style={styles.clearStyle} onPress={handleClear}>
          <Text style={styles.clearTextStyle}>X</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listData}
        keyExtractor={item => item.name}
        renderItem={renderListItem}
        contentContainerStyle={styles.listStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyComponent;
