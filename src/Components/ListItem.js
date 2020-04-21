import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import { Cancel, AddCircleOutline } from '@material-ui/icons'

export default class ListItem extends React.PureComponent{
    render() {
        return(
            <div style={{padding: '10px'}}>
                <IconButton variant="contained" color="secondary"  onClick = {this.props.removeOnClick}><Cancel /></IconButton>
                <Button variant="contained" color="primary" onClick = {this.props.triggerFunction}>{this.props.text}</Button>
            </div>
        )
    }
}