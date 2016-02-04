'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
// var SearchApi = require('../api/searchApi')
var ChannelApi = require('../api/channelApi')
var ActionTypes = require('../constants/actionTypes')

var Actions = {

  search: function (keywords) {
    // var newSearch = SearchApi.fetchResults(keywords)
    console.log('dispatching action FETCH_RESULTS');
    Dispatcher.dispatch({
      actionType: ActionTypes.FETCH_RESULTS,
      text: keywords
    })
  },

  createChannel: function (channel) {
    var newChannel = ChannelApi.saveAuthor(channel)

    Dispatcher.dispatch({
      actionType: ActionTypes.CHANNEL,
      channel: newChannel
    })
  },

  updateAuthor: function (author) {
    var updatedAuthor = ChannelApi.saveAuthor(author)

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    })
  },

  deleteAuthor: function (id) {
    ChannelApi.deleteAuthor(id)

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    })
  }
}

module.exports = Actions
