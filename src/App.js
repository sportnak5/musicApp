import React from 'react';
import './App.css';
import Page from './Components/Page';
import Playlists from './Pages/Playlists'
import NowPlayingPage from './Pages/NowPlayingPage';
import EditPlaylist from './Pages/EditPlaylist';
import EditQueue from './Pages/EditQueue';
import Search from './Pages/Search';
import Library from './Pages/Library';

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
    list.map((listItem) => {
      if(listItem !== item){
        temp.push(listItem)
      }
    })
    return temp
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value});
    var temp = []
    this.state.songNames.map((song) => {
      if(song.name.toLowerCase().includes(this.state.searchValue.toLowerCase())){
        temp.push(song)
      }
    })
    this.setState({searchResults: temp})
  }

  render() {
    return (
      <div className="App">
        {this.state.page === 'LandingPage' ?
          <Page pageChanger = {this.changeState}/>
        : this.state.page === 'Playlists' ?
          <Playlists state = {this.state} setState = {(newState) => this.setState(newState)}/>
        : this.state.page === 'Now Playing' ?
          <NowPlayingPage setState = {(newState) => this.setState(newState)}/>
        : this.state.page === 'Search' ?
          <Search state = {this.state} setState = {(newState) => this.setState(newState)}/>
        : this.state.page === 'Library' ?
          <Library state = {this.state} setState = {(newState) => this.setState(newState)}/>
        : this.state.page === 'Edit List' ? 
          <EditPlaylist state = {this.state} setState = {(newState) => this.setState(newState)}/>
        : this.state.page === 'Edit Queue' && 
          <EditQueue state = {this.state} setState = {(newState) => this.setState(newState)}/>
        }
      </div>
    )
  };
}
