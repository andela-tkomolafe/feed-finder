import React from 'react'

import '../../stylesheets/modules/feedslist.css'

export default class FeedsList extends React.Component {
  render() {
    return (
      <div className='feeds'>
        {this.props.feeds ? <List feeds={this.props.feeds.feed} /> : <p>Unable to load feed, Incorrect path or invalid feed.</p>}
      </div>
    )
  }
}

FeedsList.defaultProps = {
  feeds: {
    title: '',
    description: '',
    entries: []
  }
}


const List = props => {
  let feeds = props.feeds
  return(
    <div>
      {feeds.title ? <h2>{feeds.title}</h2> : null}
      {feeds.description ? <p>{feeds.description}</p> : null}
      <div >
        {feeds.entries.map((feed, index) => {
          return(
            <div key={index} className='feed-box'>
              {feed.title ? <p>{feed.title}</p> : null}
              {feed.author ? <p className='bold'>Author: {feed.author}</p> : null}
              {feed.link ? <a href={feed.link}>{feed.link}</a> : null }
            </div>
          )
        })}
      </div>
    </div>
  )
}
