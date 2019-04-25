import React from 'react';
import PropTypes from 'prop-types';


export default class Child1 extends React.Component {
    static propTypes = {
        counter: PropTypes.number,
    };

    static defaultProps = {
        counter: 0
    };

    componentDidUpdate(prevProps) {
        console.log('prevProps1   ', prevProps,);
        console.log('thisProps1   ', this.props);
        console.log('App update');
    }

    render() {
        console.log('render Child1');
        return (
            <div>Child1, counter { this.props.counter }</div>
        )
    }
}