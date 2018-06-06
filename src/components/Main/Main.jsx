/* External Dependencies */
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

/* Internal Dependencies */
import Loader from '../shared/Loading';
import Header from '../Header';

/* Styles Dependencies */
import styles from './Main.scss';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

	componentDidMount () {
        setTimeout(() => {
      		this.setState({ loading: false });
    	}, 3000);
    }

	handleOnClick() {
		
	}

	render() {
		const { loading } = this.state;

		return (
			<div styleName="Main">
				<Header/>
				{ loading
				?
				<Loader />
				:
				<main>
					<h2>
						Main Content
					</h2>
					<div>
						Main Text
					</div>
				</main>
				}
			</div>
		);
	}
}

export default CSSModules(Main, styles);
