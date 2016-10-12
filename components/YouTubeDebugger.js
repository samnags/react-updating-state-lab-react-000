const React = require('react');


class YouTubeDebugger extends React.Component{
  constructor(props) {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.handleBitClick = this.handleBitClick.bind(this);
    this.handleResClick = this.handleResClick.bind(this);
  }

  handleBitClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings,
      {
        bitrate: 12,
      }),
    });
  }

  handleResClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings,
        {
          video: { resolution: '720p'}
        })
    })
  }

  render() {
    return(
      <div>
          <button className='bitrate' onClick={this.handleBitClick}>{this.state.settings.bitrate}</button>
          <button className='resolution' onClick={this.handleResClick}>{this.state.settings.video.resolution}</button>
      </div>

    )
  }
}


module.exports = YouTubeDebugger
