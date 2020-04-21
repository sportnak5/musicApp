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
                        <div>
                            {'what'}
                        </div>
                    }
                </div>
            </div>
        )
    }
}