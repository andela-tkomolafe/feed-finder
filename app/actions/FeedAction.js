import $ from 'jquery'

export const fetchFeeds = (url) => {
  return (dispatch) => {
  $.ajax({
    type: "GET",
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json'
  }).done((xml) => {
            let values = xml.responseData.feed
            dispatch({
                type: 'GOT_FEEDS',
                data: values
            });
        }).fail(() => {
            dispatch({
                type: 'GOT_FEEDS_FAIL',
                data: {error: 'Unable to load feed, Incorrect path or invalid feed'}
            });
        });
  }
}

