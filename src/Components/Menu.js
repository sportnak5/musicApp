import React from 'react'
import styles from './Menu.module.css'
import { Button, Icon } from '@material-ui/core'
import {MusicNote, Menu, Search, QueueMusic } from '@material-ui/icons'
export default class extends React.PureComponent {
    render() {
        const menuItems = ['Playlists', 'My Queue', 'Search', 'Library'];
        const menuIcons = [<QueueMusic />, <MusicNote />, <Search />, <Menu />]
        return menuItems.map((item, i=0) => {
            return(
                <li className = {styles.list} key = {item}>
                    <Button variant="outlined" className = {styles.menuButton} onClick = {() => this.props.pageChanger(item)}>
                    {menuIcons[i]}
                       <h2 style={{paddingLeft: '20px'}}>{item}</h2>
                    </Button>
                </li>
            )
        })
    }
}