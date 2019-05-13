import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import Chip from 'material-ui/Chip';
import { test } from '../actions/testActions';


class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        test: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.test(this.props.text);
    }

    render() {
        return (
            <Chip
                className={ this.props.sender === 'bot' ? 'bot-message' : 'my-message' }
                style={{ margin: '5px' }}
            >
                { this.props.text }, {this.props.count}
            </Chip>
        )
    }
}

const mapStateToProps = ({ testReducer }) => ({
    count: testReducer.counter,
});

const mapDispatchToProps = dispatch => bindActionCreators({ test }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message);
