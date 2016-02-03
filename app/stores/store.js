'use strict'

// var Dispatcher = require('../dispatcher/appDispatcher')
// var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
// var _ = require('lodash')
var CHANGE_EVENT = 'change'

var Store = assign({}, EventEmitter.prototype, {

  results: [],
  playlist: [],
  channels: [],

// For SearchAPI
  getInitialData: function () {

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
  }
})

module.exports = Store
