'use strict'

var React = require('react')
var debounce = require('debounce')
var SearchApi = require ('../../api/searchApi')
var Store = require('../../stores/store')

function getStateFromStores () {
  return {
    results: Store.getAllResults()
  }
}

var SearchBar = React.createClass({
  getInitialState: function () {
    return {
      results: Store.getAllResults(),
      text: 'cat'
    }
  },

  onChange: function (e) {
    this.setState({text: e.target.value})
    this.setState(getStateFromStores())
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChange)
  },

  whenUserTypes: function (e) {
    console.log('type type type')
    var text = e.target.value
    this.setState({text: text})
    debounce(getStateFromStores(), 2000)
  },

  handleSubmit: function (e) {
    e.preventDefault()
    var nextItems = []
    var nextText = ''
    this.setState({results: nextItems, text: nextText})
  },

  render: function () {
    return (
      <form
        action=''
        method='post'
        id='search-form'>

        <input
          type='text'
          id='search-bar'
          placeholder='Search for videos..'
          ref='searchTextInput'
          onChange={this.onChange}
          onInput={this.whenUserTypes}
          value={this.state.text} />

        <button
          className='icon'
          id='search-button'
          value='Search'>Search</button>

        </form>
      )
  }
})

module.exports = SearchBar

  // getInitialState: function () {
  //   return {results: [], text: 'cat'}
  // },
