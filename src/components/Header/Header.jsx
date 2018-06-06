/* External Dependencies */
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

/* Internal Dependencies */
import styles from './Header.scss';

class Header extends Component {

    render() {
        return (
            <header styleName="Header">
                <h1 className="title">REACT APP BOILERPLATE</h1>
            </header>
        );
    }
}

export default CSSModules(Header, styles);

