'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
// var SearchApi = require('../api/searchApi')
var ChannelApi = require('../api/channelApi')
var ActionTypes = require('../constants/actionTypes')

var Actions = {

  search: function (keywords) {
    Dispatcher.dispatch({
      actionType: ActionTypes.FETCH_RESULTS,
      text: keywords
    })
  },

  addVideo: function (video) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_VIDEO,
      video: video
    })
  },

  removeVideo: function (video) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_VIDEO,
      video: video
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
