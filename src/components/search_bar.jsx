import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  componentWillMount() {
    console.log("SEARCH_BAR WILL MOUNT");
  }

  componentDidMount() {
    console.log("SEARCH_BAR DID MOUNT");
  }

  render() {
    console.log("SEARCH_BAR RENDER");
    return (
      <input type="text" className="form-control form-search"
      onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
