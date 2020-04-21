import React from 'react'

export default class ListItem extends React.PureComponent{
    render() {
        return(
            <span>
                <button onClick = {this.props.removeOnClick}>{'X'}</button>
                <button onClick = {this.props.triggerFunction}>{this.props.text}</button>
            </span>
        )
    }
}