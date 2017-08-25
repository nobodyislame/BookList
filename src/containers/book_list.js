import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList(){
    return this.props.books.map(book =>{
      return (
        <li className="list-group-item"
          key={book.title}>
          {book.title}
        </li>
      );
    })
  }
  render(){
    return(
      <ul className="col-sm-4 list-group">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    books : state.books
  }
}

export default connect(mapStateToProps)(BookList);
