import React from 'react';
import Page from '../Components/Page';
import Header from '../Components/Header';
import ListView from '../Components/ListView';
import { TextField } from '@material-ui/core'

export default class Search extends React.PureComponent{

    handleChange = (event) => {
        this.props.setState({searchValue: event.target.value});
        var temp = []
        this.props.state.songNames.forEach((song) => {
          if(song.name.toLowerCase().includes(this.props.state.searchValue.toLowerCase())){
            temp.push(song)
          }
        })
        this.props.setState({searchResults: temp})
    }

    render() {
        return(
            <Page 
                pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                contents = {
                    <>
                        <TextField label="Search" onChange = {this.handleChange}/>
                        <ListView 
                            page = {'Search'}
                            pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                            data = {this.props.state.searchResults.length === 0 ? this.props.state.songNames : this.props.state.searchResults}
                            onClick = {(song) => {
                                if (this.props.state.previousPage === 'Edit List'){
                                    var temp = this.props.state.currentPlaylist.songs
                                    temp.push(song)
                                    this.props.setState({currentPlaylist: {
                                        ...this.props.state.currentPlaylist,
                                        songs: temp
                                    }})
                                } else if (this.props.state.previousPage === 'Library'){
                                    temp = this.props.state.librarySongs
                                    temp.push(song)
                                    this.props.setState({librarySongs: temp})
                                } else if (this.props.state.previousPage === 'Edit Queue'){
                                    temp = this.props.state.queue
                                    temp.push(song)
                                    this.props.setState({queue: temp})
                                } else {
                                    console.log('oops')
                                }
                            }}
                        />
                    </>
                }
            />
        )
    }
}