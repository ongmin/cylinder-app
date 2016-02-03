'use strict'

var results = []
var _ = require('lodash')

var _clone = function (item) {
  return JSON.parse(JSON.stringify(item)) // return cloned copy so that the item is passed by value instead of by reference
}

var SearchApi = {

  fetchResults: function (keywords) {
    window.fetch('/searchresults/' + keywords).then((response) => {
      return response.json()
    }).then((data) => {
      results = data
      console.log(data)
    })
  },

  getAllResults: function () {
    return _clone(results)
  },

  getVideoById: function (id) {
    var video = _.find(results, {id: id})
    return _clone(video)
  }

}

module.exports = SearchApi


// var searchTerm = document.getElementById('#search-bar').value.toLowerCase()
// console.log('search-term: ' + searchTerm)
