import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.activeBook){
      return(
        <div> Please select a book to view title.</div>
      );
    }
    else{
      return(
        <div>
          <h4>Details for:</h4>
          <div>Title : { this.props.activeBook.title }</div>
          <div>Pages : {this.props.activeBook.pages }</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state)=>{
  return {
    activeBook : state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
