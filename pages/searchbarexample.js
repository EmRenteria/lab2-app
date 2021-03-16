import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Item from './Item';

class App extends Component {
  state = {
    search: '',
  };

  filterList(list) {
    return list.filter(
      (listItem) =>
        listItem.food
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        listItem.store.toLowerCase().includes(this.state.search.toLowerCase()),
    );
  }

  render() {
    const list = [
      {food: 'Eggs', store: 'H-E-B'},
      {food: 'Eggs', store: 'Walmart'},
      {food: 'Eggs', store: 'Target'},
      {food: 'Eggs', store: 'Market Street'},
      {food: 'Eggs', store: 'Sprouts'},
      {food: 'Apple Jacks', store: 'H-E-B'},
      {food: 'Apple Jacks', store: 'Walmart'},
      {food: 'Apple Jacks', store: 'Target'},
      {food: 'Apple Jacks', store: 'Market Street'},
      {food: 'Apple Jacks', store: 'Sprouts'},
      {food: 'Arizona Green Tea, 1 Gallon', store: 'H-E-B'},
      {food: 'Arizona Green Tea, 1 Gallon', store: 'Walmart'},
      {food: 'Arizona Green Tea, 1 Gallon', store: 'Target'},
      {food: 'Arizona Green Tea, 1 Gallon', store: 'Market Street'},
      {food: 'Arizona Green Tea, 1 Gallon', store: 'Sprouts'},
      {food: 'Honey Bunches of Oats', store: 'H-E-B'},
      {food: 'Honey Bunches of Oats', store: 'Walmart'},
      {food: 'Honey Bunches of Oats', store: 'Target'},
      {food: 'Honey Bunches of Oats', store: 'Market Street'},
      {food: 'Honey Bunches of Oats', store: 'Sprouts'},
    ];

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(search) => this.setState({search})}
          style={styles.searchBar}
        />
        {this.filterList(list).map((listItem, index) => (
          <Item key={index} food={listItem.food} store={listItem.store} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'white',
  },
});

export default App;