'use strict'

var React = require('react')

var About = React.createClass({
  render: function () {
    return (
      <div className='bodyContainer'>
        <h1>About</h1>
          <p>Cylinder-app lets you enjoy YouTube in an uncluttered manner</p>
          <p>This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Enzyme</li>
          </ul>

          <p>Made by Albert @caalberts and Min @ongmin</p>
        </p>
      </div>
    )
  }
})

module.exports = About
