import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('hich');
  }, []);

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          count: 50,
          q: term,
          lat: 27.1766658,
          lon: 77.9730551
        }
      });
      setResults(response.data.restaurants);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };
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
