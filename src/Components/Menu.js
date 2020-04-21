import React from 'react'
import styles from './Menu.module.css'

export default class extends React.PureComponent {
    render() {
        const menuItems = ['Playlists', 'Now Playing', 'Search', 'Library'];
        return menuItems.map((item) => {
            return(
                <li className = {styles.list} key = {item}>
                    <button className = {styles.button} onClick = {() => this.props.pageChanger(item)}>
                       {item}
                    </button>
                </li>
            )
        })
    }
}