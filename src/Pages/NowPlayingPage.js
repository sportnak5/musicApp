import React from 'react';
import NowPlaying from '../Components/NowPlaying';
import Page from '../Components/Page';

export default class NowPlayingPage extends React.PureComponent{
    render() {
        return(
          <Page 
            pageChanger = {(newPage) => this.props.setState({page: newPage})}
            contents = {
              <NowPlaying pageChanger = {(newPage) => this.props.setState({page: newPage})}/>
            }
          />
        )
    }
}