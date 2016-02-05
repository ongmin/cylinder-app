'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var SearchApi = require('../api/searchApi')

var InitializeActions = {
  initApp: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        results: SearchApi.fetchResults()
      }
    })
  }
}

module.exports = InitializeActions
