import React from 'react';
import PropTypes from "prop-types";


export default class Child2 extends React.Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
    };

    componentDidUpdate() {
        console.log('Child2 update');
    }

    render() {
        console.log('render Child2');
        return (
            <div>Child2, counter { this.props.counter }</div>
        )
    }
}