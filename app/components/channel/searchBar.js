'use strict'

var React = require('react')
var debounce = require('debounce')
var Action = ('../../actions/Actions')
// var SearchApi = require ('../../api/searchApi')
var Store = require('../../stores/store')

var SearchBar = React.createClass({

  updateStateFromStores: function (keywords) {
    Action.search(keywords)
  },

  getInitialState: function () {
    return {
      results: Store.getAllResults(),
      text: 'cat'
    }
  },

  onChange: function (e) {
    // this.setState({text: e.target.value})
    this.setState({results: Store.getAllResults()})
    console.log('this.state.results:', this.state.results)
  },

  componentDidMount: function () {
    Store.addChangeListener(this.onChange)
  },

  whenUserTypes: function (e) {
    console.log('type type type', e.target.value)
    var text = e.target.value
    this.setState({text: text})
    Store.fetchResults(text).then(data => this.setState({results: data}))
  },

  handleSubmit: function (e) {
    e.preventDefault()
    var nextItems = []
    var nextText = ''
    this.setState({results: nextItems, text: nextText})
  },

  render: function () {
    return (
      <div>
      <form
        action=''
        method='post'
        id='search-form'>

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
      <SearchResult results={this.state.results} />
      </div>
      )
  }
})

var SearchResult = React.createClass({
  render: function () {
    const videosDOM = this.props.results.map(result => {
      return <div>{result.snippet.title}</div>
    })
    return (
      <div className='videoResult'>{videosDOM}</div>
    )
  }
})

module.exports = SearchBar

  // getInitialState: function () {
  //   return {results: [], text: 'cat'}
  // },
