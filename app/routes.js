'use strict'

var React = require('react')

var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route
var NotFoundRoute = Router.NotFoundRoute
// var Redirect = Router.Redirect

var routes = (
  <Route name='app' path='/' handler={require('./components/appController')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Route name='channel' path='channel' handler={require('./components/channel/channel')} />
    </Route>
)

module.exports = routes
