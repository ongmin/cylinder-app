'use strict'

var React = require('react')
var Action = ('../../actions/Actions')
// var SearchApi = require ('../../api/searchApi')
var Store = require('../../stores/store')
var SearchResult = require('./searchResult')

var SearchBar = React.createClass({
  propTypes: {
    addToPlaylist: React.PropTypes.func
  },

  updateStateFromStores: function (keywords) {
    Action.search(keywords)
  },

  getInitialState: function () {
    return {
      results: Store.getAllResults()
    }
  },

  onChange: function (e) {
    this.setState({results: Store.getAllResults()})
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChange)
  },

  whenUserTypes: function (e) {
    var text = e.target.value
    this.setState({text: text})
    Store.fetchResults(text).then(data => this.setState({results: data}))
  },

  handleSubmit: function (e) {
    e.preventDefault()
    // var nextItems = []
    // var nextText = ''
    // this.setState({results: nextItems, text: nextText})
  },

  render: function () {
    return (
      <div>
      <form
        action=''
        method='post'
        id='search-form'
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          id='search-bar'
          placeholder='Search for videos..'
          ref='searchTextInput'
          onChange={this.whenUserTypes}
          value={this.state.text} />

        <button
          className='icon'
          id='search-button'
          value='Search'
          onClick={this.updateStateFromStores}>Search</button>

        </form>
      <SearchResult results={this.state.results} addToPlaylist={this.props.addToPlaylist} />
      </div>
      )
  }
})

module.exports = SearchBar
