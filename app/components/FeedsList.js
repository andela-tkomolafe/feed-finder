import React from 'react'

import '../../stylesheets/modules/feedslist.css'

export default class FeedsList extends React.Component {
  render() {
    let feeds = this.props.feeds
      return (
        <div className='feeds'>
          {feeds.title ? <h2>{feeds.title}</h2> : null}
          {feeds.description ? <p>{feeds.description}</p> : null}
          <div >
            {feeds.entries.map((feed, index) => {
              return(
                <div key={index} className='feed-box'>
                  <p>{feed.title}</p>
                  <p className='bold'>Author: {feed.author}</p>
                  <a href={feed.link}>{feed.link}</a>
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
