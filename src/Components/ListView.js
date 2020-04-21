import React from 'react';
import ListItem from './ListItem';

export default class ListView extends React.PureComponent{
    render() {
        if (this.props.data.length >= 1){
            return this.props.data.map((item) => {
                return(
                    <li key = {item.name}>
                        <ListItem 
                            removeOnClick = {() => this.props.removeOnClick(item)} 
                            triggerFunction = {this.props.onClick ? () => this.props.onClick(item) : () => {console.log('frick')}} 
                            text = {item.name}
                        />
                    </li>
                )
            })
        } else {
            return (
                <div>{'No things'}</div>
            )
        }
    }
}