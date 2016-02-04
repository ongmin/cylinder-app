'use strict'

var React = require('react')

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div id='container'>
          <div id='monitor'>
            <div id='monitorscreen'>
              <i className='fa fa-plus'> Create your own Channel </i>
            </div>
          </div>
        </div>

        <div className='channelsContainer'>
        </div>
    </div>
    )
  }
})

module.exports = Home
