import React from 'react';
import Header from '../Components/Header';
import Page from '../Components/Page';
import ListView from '../Components/ListView';

export default class EditPlaylist extends React.PureComponent{
    render() {
        return(
            <Page 
                pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                contents = {
                <>
                    <Header 
                        page = {this.props.state.page}
                        name = {this.props.state.currentPlaylist ? this.props.state.currentPlaylist.name : 'N/A'}
                        addButtonHandler = {() => {
                            this.props.setState({page: 'Search', previousPage: 'Edit List'})
                        }}
                    />
                    <ListView 
                        pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                        data = {this.props.state.currentPlaylist.songs}
                        removeOnClick = {(song) => {
                            this.props.setState({currentPlaylist: {
                            ...this.props.state.currentPlaylist,
                            songs: this.removeFunc(song, this.props.state.currentPlaylist.songs)
                            }})
                        }}
                    />
                </>
                }
            />
        )
    }
}