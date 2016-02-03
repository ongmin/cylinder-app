'use strict'

// Albert will create the mongoDB to be linked up to here. Awaiting details.

var channels = []
var _ = require('lodash')

var _clone = function (item) {
  return JSON.parse(JSON.stringify(item)) // return cloned copy so that the item is passed by value instead of by reference
}

var ChannelApi = {
  getAllChannels: function () {
    return _clone(channels)
  },

  getChannelById: function (id) {
    var author = _.find(channels, {id: id})
    return _clone(author)
  },

  saveChannel: function (channel) {
    console.log(channel)

    if (channel.id) {
      var existingChannelList = _.indexOf(channels, _.find(channels, {id: channel.id}))
      channels.splice(existingChannelList, 1, channel)
    } else {
      channels.push(channel)
    }

    return _clone(channel)
  },

  deleteAuthor: function (id) {
    _.remove(channels, { id: id })
  }
}

module.exports = ChannelApi
