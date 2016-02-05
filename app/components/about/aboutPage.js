'use strict'

var React = require('react')

var About = React.createClass({
  render: function () {
    return (

      <div className='bodyContainer'>
        <div className='contentContainer'>
        <h2>About</h2>
          <p>Cylinder-app lets you enjoy YouTube in an uncluttered manner</p>
          <p>This application uses the following technologies:
          <ul id='techContainer'>
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
            <li>Webpack</li>
          </ul>

          <p>Made by Albert @caalberts and Min @ongmin</p>
        </p>
      </div>
    </div>
    )
  }
})

module.exports = About
