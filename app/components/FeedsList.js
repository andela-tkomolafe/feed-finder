import React from 'react';

export default class FeedsList extends React.Component {
  render() {
    let feeds = this.props.feeds
      return (
        <div>
          {feeds.title ? <p>{feeds.title}</p> : null}
          {feeds.description ? <p>{feeds.description}</p> : null}
          <div>
            {feeds.entries.map((feed, index) => {
              return(
                <div key={index}>
                  <p>{feed.title}</p>
                  <p>Author: {feed.author}</p>
                  <p>Link: {feed.link}</p>
                </div>
              )
            })}
          </div>
        </div>
      )
  }
}

FeedsList.defaultProps = {
  feeds: {
    entries: []
  }
}
