import React from 'react';
import Page from '../Components/Page';
import Header from '../Components/Header';
import ListView from '../Components/ListView';

export default class Search extends React.PureComponent{
    render() {
        return(
            <Page 
                pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                contents = {
                    <>
                        <Header page = {this.props.state.page}/>
                        <input type = 'text' name = 'song name' onChange = {this.handleChange}/>
                        <ListView 
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
                                    var temp = this.props.state.librarySongs
                                    temp.push(song)
                                    this.props.setState({librarySongs: temp})
                                } else if (this.props.state.previousPage === 'Edit Queue'){
                                    var temp = this.props.state.queue
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