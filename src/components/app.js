import React, { Component } from 'react';
import BookList from '../containers/book_list.js';
import BookDetail from '../containers/active_book.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
