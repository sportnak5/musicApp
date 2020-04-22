import React from 'react';
import ListItem from './ListItem';

export default class ListView extends React.PureComponent{
    render() {
        if (this.props.data.length >= 1){
            return this.props.data.map((item) => 
                <ListItem 
                    removeOnClick = {() => this.props.removeOnClick(item)} 
                    triggerFunction = {this.props.onClick ? () => this.props.onClick(item) : () => {console.log('frick')}} 
                    text = {item.name}
                    showX = {this.props.page !== 'Search'}
                />)
        } else {
            return (
                <div>{'Thist list is empty'}</div>
            )
        }
    }
}