import React from 'react'

export default class Header extends React.PureComponent {
    render() {
        return(
            <span>
                {this.props.page === 'Library' ? 
                    'Library'
                : this.props.page === 'Playlists' ?
                    'Playlists'
                : this.props.page === 'Edit List' ?
                    this.props.name && this.props.name
                : this.props.page // this is for the song list, there will be no title
                }
                {this.props.page !== 'Search' &&
                    <button onClick = {this.props.addButtonHandler && this.props.addButtonHandler}>
                        {'+'}
                    </button>
                }
            </span>
        )
    }
}