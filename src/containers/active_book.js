import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    return(
      <div>Book Detail {this.props.activeBook ? this.props.activeBook.title : 'No Book Selected'}</div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    activeBook : state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
