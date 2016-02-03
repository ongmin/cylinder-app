'use strict'

var playlist = []
var _ = require('lodash')

var _clone = function (item) {
  return JSON.parse(JSON.stringify(item)) // return cloned copy so that the item is passed by value instead of by reference
}

var PlaylistApi = {

  getPlaylist: function () {
    return _clone(playlist)
  },

  getVideoById: function (id) {
    var video = _.find(playlist, {id: id})
    return _clone(video)
  },

  saveVideo: function (video) {
    console.log(video)

    if (video.id) {
      var existingPlaylist = _.indexOf(playlist, _.find(playlist, {id: video.id}))
      playlist.splice(existingPlaylist, 1, video)
    } else {
      playlist.push(video)
    }

    return _clone(video)
  },

  deleteVideo: function (id) {
    _.remove(playlist, { id: id })
  }
}

module.exports = PlaylistApi
