/* global $ */
// If doing project, do require with npm instead of overiding

$(document).ready(function () {
  youtubeApiCall()
  $('#search-button').on('click', function (event) {
    youtubeApiCall()
    return false
  })
  $('#search-bar').autocomplete({
    source: function (request, response) {
      var sqValue = []
      $.ajax({
        type: 'POST',
        url: 'http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1',
        dataType: 'jsonp',
        data: $.extend({
          q: request.term
        }, { }),
        success: function (data) {
          console.log('api ' + data[1])
          var obj = data[1]
          $.each(obj, function (key, value) {
            sqValue.push(value[0])
          })
          response(sqValue)
        }
      })
    },
    select: function (event, ui) {
      setTimeout(function () {
        youtubeApiCall()
      }, 300)
    }
  })
})

function youtubeApiCall () {
  $.ajax({
    cache: false,
    data: $.extend({
      key: 'AIzaSyAXM12GMIcdnQdkTTS0hVd8-EejcncMjMY',
      q: $('#search-bar').val(),
      part: 'snippet'
    }, {maxResults: 20, pageToken: $('#pageToken').val()}),
    dataType: 'json',
    type: 'GET',
    timeout: 5000,
    url: 'https://www.googleapis.com/youtube/v3/search'
  })
  .done(function (data) {
    if (typeof data.prevPageToken === 'undefined') { $('#pageTokenPrev').hide() } else { $('#pageTokenPrev').show() }
    if (typeof data.nextPageToken === 'undefined') { $('#pageTokenNext').hide() } else { $('#pageTokenNext').show() }
    var items = data.items
    var videoList = ''
    $('#pageTokenNext').val(data.nextPageToken)
    $('#pageTokenPrev').val(data.prevPageToken)
    $.each(items, function (index, e) {
      console.log(e)
      videoList = `${videoList}
      <li class="hyv-video-list-item">
      <div class="hyv-thumb-wrapper">
      <a href="" class="hyv-thumb-link">
      <span class="hyv-simple-thumb-wrap">
      <img alt="${e.snippet.title}" src="${e.snippet.thumbnails.default.url}" width="120" height="90">
      </span>
      </a>
      </div>
      <div class="hyv-content-wrapper">
      <a href="" class="hyv-content-link" title="'${e.snippet.title}">
      <span class="title">${e.snippet.title}</span>
      <span class="stat attribution">by
      <span>${e.snippet.channelTitle}</span>
      </span>
      </a>
      </div>
      </li>`
    })

    $('#search-result').html(videoList)
  })
}
