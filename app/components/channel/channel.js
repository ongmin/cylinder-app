'use strict'

import React from 'react'
import Playlist from './playlist'
// var Router = require('react-router')
// var Link = Router.Link

export default class Channel extends React.Component {
  render () {
    return (
      <div>
        <div className='channelsContainer'>
        <h1>Channel</h1>
        <Playlist/>
        </div>
    </div>
    )
  }
}

module.exports = Channel
