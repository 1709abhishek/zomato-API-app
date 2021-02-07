import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = props => {
  const { term, onTermChange, onTermSubmit } = props;
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.searchIcon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        style={styles.inputStyle}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={newSearch => onTermSubmit(newSearch)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18
  },
  searchIcon: {
    alignSelf: 'center',
    fontSize: 35
  }
});

export default SearchBar;
