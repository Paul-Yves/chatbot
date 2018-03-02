import React, { Component } from "react";
import PropTypes from 'prop-types';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        const {author, date, content, type} = this.props;
        return <div className='message'>
            <span className='author'>{author}</span>
            <span className='date'>({date})</span>
            :
            {content}
        </div>
    }

}
Message.propTypes = {
    type: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
};
export default Message
