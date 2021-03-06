/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

var Dispatcher = require('flux').Dispatcher
var AppDispatcher = new Dispatcher()
var Store = require('../stores/store')
var ActionTypes = require('../constants/actionTypes')

AppDispatcher.register(function (action) {
  switch (action.actionType) {

// For SearchAPI
    // case ActionTypes.INITIALIZE:
    //   Store.getAllResults(action.text)
    //   Store.emitChange()
    //   break

    // For Youtube search
    case ActionTypes.FETCH_RESULTS:
      Store.fetchResults(action.text)
      break

    // For Playlist
    case ActionTypes.ADD_VIDEO:
      Store.addVideo(action.video)
      Store.emitChange()
      break
    case ActionTypes.PLAY_VIDEO:
      Store.playVideo(action.video)
      Store.emitChange()
      break
    case ActionTypes.PLAY_NEXT:
      Store.playNext()
      Store.emitChange()
      break

    case ActionTypes.REMOVE_VIDEO:
      Store.removeVideo(action.video)
      Store.emitChange()
      break

    // For authentication
    case ActionTypes.LOGIN:
      Store.login(action.token)
      Store.emitChange()
      break
    case ActionTypes.LOGOUT:
      Store.logout()
      Store.emitChange()
      break

    // case ActionTypes.CREATE_CHANNEL:
    //   channels.push(action.name)
    //   Store.emitChange()
    //   break

    // case ActionTypes.UPDATE_PLAYLIST:
    //   var existingVideo = _.find(results, {id: action.video.id})
    //   var existingVideoIndex = _.indexOf(playlist, existingVideo)
    //   results.splice(existingVideoIndex, 1, action.video)
    //   Store.emitChange()
    //   break

    // case ActionTypes.DELETE_PLAYLIST:
    //   _.remove(channels, function (playlist) {
    //     return action.id === playlist.id
    //   })
    //   Store.emitChange()
    //   break

    default:
      // no op
  }
})

module.exports = AppDispatcher
