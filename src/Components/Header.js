import React from 'react'
import { IconButton } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import styles from './Header.module.css'

export default class Header extends React.PureComponent {
    render() {
        return(
            <span style={{backgroundColor: 'white', padding: '10px', borderRadius: '4px'}}>
                {this.props.page === 'Library' ? 
                    'Library'
                : this.props.page === 'Playlists' ?
                    'Playlists'
                : this.props.page === 'Edit List' ?
                    this.props.name && this.props.name
                : this.props.page // this is for the song list, there will be no title
                }
                {this.props.page !== 'Search' &&
                    <IconButton style={{width: '5px'}} variant="contained" color="primary" onClick = {this.props.addButtonHandler && this.props.addButtonHandler}>
                        <AddCircle />
                    </IconButton>
                }
            </span>
        )
    }
}