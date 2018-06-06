/* External Dependencies */
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

/* Styles Dependencies */
import styles from './Loading.scss';

class Loading extends Component {
	render() {
		return (
			<span styleName="Loading"/>
		);
	}
}

export default CSSModules(Loading, styles);
