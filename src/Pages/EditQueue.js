import React from 'react';
import Header from '../Components/Header';
import Page from '../Components/Page';
import ListView from '../Components/ListView';

export default class EditQueue extends React.PureComponent{
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
        return(
            <Page 
                pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                contents = {
                <>
                    <Header 
                        page = {this.props.state.page}
                        name = {'Queue'}
                        addButtonHandler = {() => {
                            this.props.setState({page: 'Search', previousPage: 'Edit Queue'})
                        }}
                    />
                    <ListView 
                        page = {'My Queue'}
                        pageChanger = {(newPage) => this.props.setState({page: newPage})} 
                        data = {this.props.state.queue}
                        removeOnClick = {(song) => {
                            this.props.setState({queue: this.removeFunc(song, this.props.state.queue)})
                        }}
                    />
                </>
                }
            />
        )
    }
}