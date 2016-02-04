'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var SearchApi = require('../api/searchApi')
var ChannelApi = require('../api/channelApi')
var ActionTypes = require('../constants/actionTypes')

var Actions = {

  search: function (keywords) {
    var newSearch = SearchApi.fetchResults(keywords)

    Dispatcher.disapatch({
      actionTypes: ActionTypes.GET_RESULTS,
      results: newSearch
    })
  },

  createAuthor: function (author) {
    var newAuthor = ChannelApi.saveAuthor(author)

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
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
