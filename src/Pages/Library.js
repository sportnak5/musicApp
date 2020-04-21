import React from 'react';
import Page from '../Components/Page';
import Header from '../Components/Header';
import ListView from '../Components/ListView';

export default class Library extends React.PureComponent{
    render() {
        return(
            <Page 
                pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                contents = {
                <>
                    <Header 
                        page = {this.props.state.page}
                        addButtonHandler = {() => {
                            this.props.setState({page: 'Search', previousPage: 'Library'})
                        }}
                    />
                    <ListView 
                        pageChanger = {(newPage) => this.props.setState({page: newPage})}
                        data = {this.props.state.librarySongs}
                        removeOnClick = {(song) => {
                            this.props.setState({librarySongs: this.removeFunc(song, this.props.state.librarySongs)})
                        }}
                    />
                </>
                }
            />
        )
    }
}