//
//
// var VideoRow = React.createClass({
//   propTypes: {
//     video: React.PropTypes.element.isRequired
//   },
//   render: function () {
//     var name =
//       <span style={{color: 'red'}}>
//         {this.props.video.name}
//       </span>
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{this.props.video.artist}</td>
//       </tr>
//     )
//   }
// })
//
// var VideoTable = React.createClass({
//   propTypes: {
//     videos: React.PropTypes.array.isRequired
//   },
//   render: function () {
//     var rows = []
//     this.props.videos.forEach(function (video) {
//       rows.push(<VideoRow video={video} key={video.title} />)
//     })
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     )
//   }
// })
//
// var FilterableVideoTable = React.createClass({
//   propTypes: {
//     videos: React.PropTypes.array.isRequired
//   },
//
//   getInitialState: function () {
//     return {
//     }
//   },
//
//   render: function () {
//     return (
//       <div>
//         <SearchBar/>
//         <VideoTable videos={this.props.videos} />
//       </div>
//     )
//   }
// })
//
// <FilterableVideoTable videos={VIDEOS} />,
