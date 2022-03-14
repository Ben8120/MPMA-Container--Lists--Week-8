import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, SectionList } from "react-native";
import Bookitem from "./Bookitem";
const BooksSample = [{
  rank: 1,
  title: "GATHERING PREY", author: "John Sandford", book_image:
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421735953l/24356384.jpg"
}, {
  rank: 2,
  title: "MEMORY MAN", author: "David Baldacci", book_image:
 "https://images-na.ssl-images-amazon.com/images/I/81Pcob+ofmL.jpg"
}];

const BooksTask = [
  {
    title: 'Horror',
    data: ['Book A']
  },
  {
    title: 'Fiction',
    data: ['Book B', 'Book C']
  },
  {
    title: 'Children',
    data: ['Book D']
  }
]

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this._addKeysToBooks(BooksSample) };
  }
  _renderItem = ({ item }) => {
    return (
        <Bookitem coverURL={item.book_image} title={item.key} author={item.author}
        />
    );
  };
  _addKeysToBooks = books => {
    return books.map(book => {
      return Object.assign(book, { key: book.title });
    });
  };
  render() {
    return (
      <View>
        <FlatList data={this.state.data} renderItem={this._renderItem} />;
        <SectionList 
          sections={BooksTask}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section: {title}}) => <Text style={styles.sectionHeader}>{title}</Text>}
          keyExtractor={(item, index) => index}
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({ 
  container: {
     flex: 1, paddingTop: 22 
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  });
export default BookList;
