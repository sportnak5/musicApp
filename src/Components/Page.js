import React from 'react';
import Menu from './Menu';

export default class Page extends React.PureComponent {
    render() {
        return(
            <div>
                <Menu pageChanger = {this.props.pageChanger}/>
                <div>
                    {this.props.contents ? 
                        this.props.contents
                    :
                        <h2>
                            Welcome to Popify!
                        </h2>
                    }
                </div>
            </div>
        )
    }
}