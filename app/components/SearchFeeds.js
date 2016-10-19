import React from 'react'

import '../../stylesheets/modules/searchfeeds.css'

export default class SearchFeeds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {url: ''}
    this.fetchFeeds = this.fetchFeeds.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(e) {
    this.setState({url: e.target.value})
  }
  fetchFeeds() {
    this.props.fetchFeeds(this.state.url)
    this.setState({url: ''})
  }

  render() {
    return (
      <div className='search'>
        <p>Enter the url to the feeds you want.</p>
          <input type='text' onChange={this.onInputChange} value={this.state.url} placeholder='e.g https://github.com/betty.atom'/>
          <button onClick={this.fetchFeeds}>Search</button>
      </div>
    )
  }
}