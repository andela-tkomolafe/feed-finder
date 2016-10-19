import $ from 'jquery'

export const fetchFeeds = (url) => {
  return (dispatch) => {
  $.ajax({
    type: "GET",
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url), // pass the feed through google api to return a json
    dataType: 'json'
  }).done((xml) => {
          let values = xml.responseData
          dispatch({
              type: 'GOT_FEEDS',
              data: values
          });
    }).fail(() => {
        dispatch({
            type: 'GOT_FEEDS_FAIL',
            data: 'Unable to load feed, Incorrect path or invalid feed'
        });
      });
  }
}

