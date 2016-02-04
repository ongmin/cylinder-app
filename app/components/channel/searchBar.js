'use strict'

var React = require('react')
var Actions = require('../../actions/Actions')
// var SearchApi = require ('../../api/searchApi')
var Store = require('../../stores/store')

var SearchBar = React.createClass({
  propTypes: {
    addToPlaylist: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      results: Store.getAllResults()
    }
  },

  onChange: function (e) {
    this.setState({results: Store.getAllResults()})
    console.log('change:', this.state)
  },

  componentDidMount: function () {
    console.log(this.state)
    Store.addChangeListener(this.onChange)
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChange)
  },

  whenUserTypes: function (e) {
    console.log(e.target.value)
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
        <SearchResult results={this.state.results} addToPlaylist={this.props.addToPlaylist} />
      </div>
      )
  }
})

var SearchResult = React.createClass({
  propTypes: {
    results: React.PropTypes.array,
    addToPlaylist: React.PropTypes.func
  },

  render: function () {
    const videosDOM = this.props.results.map((result, i) => {
      return <div key={result.id.videoId} onClick={this.handleClick.bind(this, i)}>{result.snippet.title}</div>
    })
    return (
      <div className='videoResult'>{videosDOM}</div>
    )
  },

  handleClick: function (i) {
    this.props.addToPlaylist(this.props.results[i])
  }
})

module.exports = SearchBar
