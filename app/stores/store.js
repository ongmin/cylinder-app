'use strict'

// var Dispatcher = require('../dispatcher/appDispatcher')
// var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
// var ChannelUtils = require('../utils/ChannelUtils');

// var _ = require('lodash')
var CHANGE_EVENT = 'change'

var Store = assign({}, EventEmitter.prototype, {

  results: [],
  playlist: [],
  channels: [],

  fetchResults: function (keywords) {
    console.log('fetching', keywords)
    return window.fetch('/searchresults/' + keywords)
      .then(res => res.json())
      .then((data) => {
        this.results = data
        this.emitChange()
      })
  },

  getAllResults: function () {
    return this.results
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

// For PlaylistAPI
  deleteVideo: function (video) {
    var idx = this.playlist.indexOf(video)
    this.playlist.splice(idx, 1)
  },

  addNewVideo: function (video) {
    this.playlist.push(video)
  },

// For ChannelAPI
  createChannel: function (name, slug, owner, viewers, playlist) {
    name = name
    slug = slug
    owner = owner
    viewers = []
    playlist = []
  }
})

module.exports = Store
