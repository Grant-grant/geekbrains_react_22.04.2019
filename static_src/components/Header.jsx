import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import connect from "react-redux/es/connect/connect";


class Header extends React.Component {
    static propTypes = {
        messageCount: PropTypes.number.isRequired,
        lastMessage: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className="header">
                Общее количество сообщений: { this.props.messageCount },
                Последнее сообщение: { this.props.lastMessage }
                <Link to={ '/profile/' }>Profile</Link>
            </div>
        )
    }
}

const mapStateToProps = ({ testReducer }) => ({
    lastMessage: testReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);