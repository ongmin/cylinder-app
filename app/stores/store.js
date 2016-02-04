/* global Auth0Lock */
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

  lock: new Auth0Lock('gm22xoo58OOcB8qLEkg6dcohb6vzQnZo', 'caalberts.auth0.com'),
  token: null,

  // search youtube api
  fetchResults: function (keywords) {
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

  // manipulate playlist
  addVideo: function (video) {
    this.playlist.push(video)
  },
  getPlaylist: function () {
    return this.playlist
  },
  removeVideo: function (video) {
    var idx = this.playlist.indexOf(video)
    this.playlist.splice(idx, 1)
  },

  // user authentication
  login: function (token) {
    if (token) {
      this.lock.getProfile(token, (err, profile) => {
        if (err) return console.error('Error loading the Profile', err)
        else {
          this.user = profile
          this.emitChange()
          window.fetch('/users/' + profile.user_id, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
          }).then(res => {
            if (res.status === 404) {
              window.fetch('/users', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
              })
            }
          })
        }
      })
    } else {
      this.lock.show()
    }
  },
  getUser: function () {
    return this.user
  },
  logout: function () {
    this.user = null
    window.localStorage.removeItem('userToken')
  },
  parseToken: function () {
    var idToken = window.localStorage.getItem('userToken')
    var authHash = this.lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        window.localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.error('Error signing in', authHash)
        return null
      }
    }
    if (idToken) {
      this.token = idToken
      this.login(this.token)
    }
  },
  getToken: function () {
    return this.token
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
