import React from 'react'
import { Button } from '@material-ui/core'

export default class NowPlaying extends React.PureComponent{
    render() {
        return (
            <Button onClick = {() => this.props.pageChanger('Edit Queue')}>{'View Queue'}</Button>
        )
    }
}