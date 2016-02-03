'use strict'

var React = require('react')
var debounce = require('debounce')
var SearchApi = require ('../../api/searchApi')

var SearchBar = React.createClass({
  getInitialState: function () {
    return {results: [], text: 'cat'}
  },

  onChange: function (e) {
    this.setState({text: e.target.value})
  },

  componentDidMount: function () {
    this.fetchResults()
  },

  whenUserTypes: function () {
    console.log('type type type')
    debounce(this.fetchResults(), 2000)
  },

  fetchResults: function () {
    window.fetch('/searchresults/' + this.state.text).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      this.setState({ results: data })
    })
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
