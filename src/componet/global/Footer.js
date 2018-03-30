//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assent
import './css/Footer.css';

class Footer extends Component {
    static propTypes = {
        footerText : PropTypes.string
    }

    render() {
        const { copyright = '&copy; Copyright 2017' } = this.props;

        return (
            <div className="Footer">
                <p>{copyright}</p>
            </div>
        );
    }
}

export default Footer;