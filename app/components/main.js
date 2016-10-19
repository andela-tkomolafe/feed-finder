import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchFeeds } from '../actions/FeedAction'
import SearchFeeds from './SearchFeeds'
import FeedsList from './FeedsList'

import '../../stylesheets/modules/main.css'


class Main extends React.Component {
  render() {
    console.log(this.props, "from main")
    return (
      <div className='main'>
        <SearchFeeds fetchFeeds={this.props.fetchFeeds} />
        <FeedsList feeds={this.props.feeds.data} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feeds: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeeds: bindActionCreators(fetchFeeds, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
