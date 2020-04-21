import React from 'react';
import './App.css';
import Page from './Components/Page';
import ListView from './Components/ListView';
import Header from './Components/Header';
import NowPlaying from './Components/NowPlaying';
import { TextField } from '@material-ui/core'
import { Album } from '@material-ui/icons'

export default class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      page: 'LandingPage',
      previousPage: 'LandingPage',
      searchValue: '',
      currentPlaylist: {},
      queue: [],
      playlists: [
        {
          name: 'Example',
          songs: [
            {
              name: '3 nights by',
              artist: 'Dominic Fike'
            }, 
          ]
        }
      ],
      songNames: [
        {
          name: '3 nights by',
          artist: 'Dominic Fike'
        }, 
        {
          name: 'Bang!',
          artist: 'AJR',
        },
        {
          name: 'Tribe',
          artist: 'Jim Swim'
        },
        {
          name: 'Feels Right',
          artist: 'Danny\'s dead'
        },
        {
          name: 'Mariposa',
          artist: 'Peach Tree Rascals'
        },
        {
          name: 'Blinding Lights',
          artist: 'The Weeknd'
        },
        {
          name: 'Thriller',
          artist: 'Michael Jackson'
        },
        {
          name: 'Yellow Submarine',
          artist: 'The Beatles'
        },
        {
          name: 'USSR',
          artist: 'The Beatles'
        },
      ],
      searchResults: [],
      librarySongs: [
        {
          name: 'Mariposa',
          artist: 'Peach Tree Rascals'
        },
        {
          name: 'Blinding Lights',
          artist: 'The Weeknd'
        },
        {
          name: 'Thriller',
          artist: 'Michael Jackson'
        },
        {
          name: 'Yellow Submarine',
          artist: 'The Beatles'
        },
        {
          name: 'USSR',
          artist: 'The Beatles'
        },
      ],
    }
  }

  changeState = (newPage) => {
    this.setState({page: newPage})
  }

  removeFunc = (item, list) => {
    const temp = []
    list.forEach((listItem) => {
      if(listItem !== item){
        temp.push(listItem)
      }
    })
    return temp
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value});
    var temp = []
    this.state.songNames.forEach((song) => {
      if(song.name.toLowerCase().includes(this.state.searchValue.toLowerCase())){
        temp.push(song)
      }
    })
    this.setState({searchResults: temp})
  }

  render() {
    return (
      <div className="App">
        <h1><Album />  Popify  <Album /></h1>
        {this.state.page === 'LandingPage' ?
          <Page pageChanger = {this.changeState}/>
        : this.state.page === 'Playlists' ?
          <Page 
            pageChanger = {this.changeState} 
            contents = {
              <>
                <Header 
                  page = {this.state.page}
                  addButtonHandler = {() => {
                    const newPlaylist = {
                      name: 'New Playlist ' + this.state.playlists.length,
                      songs: []
                    }
                    var temp = this.state.playlists
                    temp.push(newPlaylist)
                    this.setState({page: 'Edit List', currentPlaylist: newPlaylist, playlists: temp})
                  }}
                />
                <ListView 
                  pageChanger = {this.changeState} 
                  removeOnClick = {(playlist) => {
                    this.setState({playlists: this.removeFunc(playlist, this.state.playlists)})
                  }}
                  data = {this.state.playlists}
                  onClick = {(currentPlaylist) => {
                    this.setState({page: 'Edit List', currentPlaylist})
                  }}
                />
              </>
            }
          />
        : this.state.page === 'My Queue' ?
          <Page 
            pageChanger = {this.changeState}
            contents = {
              <NowPlaying pageChanger = {this.changeState}/>
            }
          />
        : this.state.page === 'Search' ?
          <Page 
            pageChanger = {this.changeState} 
            contents = {
              <>
                <TextField label="Search" name = 'song name' onChange = {this.handleChange}/>
                <ListView 
                  pageChanger = {this.changeState} 
                  data = {this.state.searchResults.length === 0 ? this.state.songNames : this.state.searchResults}
                  onClick = {(song) => {
                    if (this.state.previousPage === 'Edit List'){
                      var temp = this.state.currentPlaylist.songs
                      temp.push(song)
                      this.setState({currentPlaylist: {
                        ...this.state.currentPlaylist,
                        songs: temp
                      }})
                    } else if (this.state.previousPage === 'Library'){
                      temp = this.state.librarySongs
                      temp.push(song)
                      this.setState({librarySongs: temp})
                    } else if (this.state.previousPage === 'Edit Queue'){
                      temp = this.state.queue
                      temp.push(song)
                      this.setState({queue: temp})
                    } else {
                      console.log('oops')
                    }
                  }}
                />
              </>
            }
          />
        : this.state.page === 'Library' ?
          <Page 
            pageChanger = {this.changeState} 
            contents = {
              <>
                <Header 
                  page = {this.state.page}
                  addButtonHandler = {() => {
                    this.setState({page: 'Search', previousPage: 'Library'})
                  }}
                />
                <ListView 
                  pageChanger = {this.changeState} 
                  data = {this.state.librarySongs}
                  removeOnClick = {(song) => {
                    this.setState({librarySongs: this.removeFunc(song, this.state.librarySongs)})
                  }}
                />
              </>
            }
          />
        : this.state.page === 'Edit List' ? 
          <Page 
            pageChanger = {this.changeState} 
            contents = {
              <>
                <Header 
                  page = {this.state.page}
                  name = {this.state.currentPlaylist ? this.state.currentPlaylist.name : 'N/A'}
                  addButtonHandler = {() => {
                    this.setState({page: 'Search', previousPage: 'Edit List'})
                  }}
                />
                <ListView 
                  pageChanger = {this.changeState} 
                  data = {this.state.currentPlaylist.songs}
                  removeOnClick = {(song) => {
                    this.setState({currentPlaylist: {
                      ...this.state.currentPlaylist,
                      songs: this.removeFunc(song, this.state.currentPlaylist.songs)
                    }})
                  }}
                />
              </>
            }
          />
          : this.state.page === 'Edit Queue' && 
          <Page 
            pageChanger = {this.changeState} 
            contents = {
              <>
                <Header 
                  page = {this.state.page}
                  name = {'Queue'}
                  addButtonHandler = {() => {
                    this.setState({page: 'Search', previousPage: 'Edit Queue'})
                  }}
                />
                <ListView 
                  pageChanger = {this.changeState} 
                  data = {this.state.queue}
                  removeOnClick = {(song) => {
                    this.setState({queue: this.removeFunc(song, this.state.queue)})
                  }}
                />
              </>
            }
          />}
      </div>
    )
  };
}
