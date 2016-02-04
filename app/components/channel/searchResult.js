import React, { Component } from 'react'

export default class SearchResult extends Component {
  render () {
    const { videoResult } = this.props

    var videoListDOM = videoResult.map(function (product) {
      return <div>{product.title}</div>
    })

    return (
      <div className='videoResult'>
        {videoListDOM}
      </div>
    )
  }
}
