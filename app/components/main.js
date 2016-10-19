import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchFeeds } from '../actions/FeedAction'
import Header from './Header'
import SearchFeeds from './SearchFeeds'
import FeedsList from './FeedsList'

import '../../stylesheets/modules/main.css'


class Main extends React.Component {
  render() {
    console.log(this.props, "from main")
    return (
      <div className='main'>
        <Header />
        <SearchFeeds fetchFeeds={this.props.fetchFeeds} />
        {Object.keys(this.props.feeds).length > 0 ? <FeedsList feeds={this.props.feeds.data} /> : null}
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
