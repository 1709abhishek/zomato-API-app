import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMessage, searchApi] = useSearchResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
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
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
