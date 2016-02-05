'use strict'

var React = require('react')
var Actions = require('../../actions/Actions')
var Store = require('../../stores/store')
var SearchResult = require('./searchResult')

var SearchBar = React.createClass({
  getInitialState: function () {
    return {
      results: Store.getAllResults()
    }
  },

  onChange: function () {
    this.setState({results: Store.getAllResults()})
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChange)
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChange)
  },

  whenUserTypes: function (e) {
    Actions.search(e.target.value)
  },

  render: function () {
    return (
      <div>
        <input
          type='text'
          id='search-bar'
          placeholder='Search for videos..'
          ref='searchTextInput'
          onChange={this.whenUserTypes}
        />
        <SearchResult results={this.state.results} />
      </div>
      )
  }
})

module.exports = SearchBar
