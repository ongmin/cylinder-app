'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var SearchApi = require('../api/searchApi')
// var ChannelApi = require('../api/channelApi')
// var PlaylistApi = require('../api/playlistApi')

var InitializeActions = {
  initApp: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        results: SearchApi.fetchResults()
        // playlist: PlaylistApi.fetchPlaylist(),
        // channels: ChannelApi.fetchChannels()
      }
    })
  }
}

module.exports = InitializeActions
