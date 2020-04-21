import React from 'react'

export default class NowPlaying extends React.PureComponent{
    render() {
        return (
            <button onClick = {() => this.props.pageChanger('Edit Queue')}>{'Queue'}</button>
        )
    }
}