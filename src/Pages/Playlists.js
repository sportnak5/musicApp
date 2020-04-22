import React from 'react';
import Page from '../Components/Page';
import Header from '../Components/Header';
import ListView from '../Components/ListView'

export default class Playlists extends React.PureComponent{
  removeFunc = (item, list) => {
    const temp = []
    list.forEach((listItem) => {
      if(listItem !== item){
        temp.push(listItem)
      }
    })
    return temp
  }

  render() {
      return (
          <Page 
            pageChanger = {(newPage) => this.props.setState({page: newPage})}
            contents = {
              <>
                <Header 
                  page = {this.props.state.page}
                  addButtonHandler = {() => {
                    const newPlaylist = {
                      name: 'New Playlist ' + this.props.state.playlists.length,
                      songs: []
                    }
                    var temp = this.props.state.playlists
                    temp.push(newPlaylist)
                    this.props.setState({page: 'Edit List', currentPlaylist: newPlaylist, playlists: temp})
                  }}
                />
                <ListView 
                  page = {'Playlists'}
                  pageChanger = {this.changeState} 
                  removeOnClick = {(playlist) => {
                    this.props.setState({playlists: this.removeFunc(playlist, this.props.state.playlists)})
                  }}
                  data = {this.props.state.playlists}
                  onClick = {(currentPlaylist) => {
                    this.props.setState({page: 'Edit List', currentPlaylist})
                  }}
                />
              </>
            }
          />
      )
  }
}