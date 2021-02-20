import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMessage, searchApi] = useSearchResults();
  return (
    <View>
      {console.log(term)}
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage.length !== 0 ? <Text>{errorMessage}</Text> : null}
      <Text>
        We have Found {term} {results.length}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
