import React, { Component } from "react";
import PropTypes from 'prop-types';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        const { date, content, type} = this.props;
        const author = this.props.author || 'chatbot';
        const local_date = (new Date(date)).toLocaleString();
        const messageClass = author === 'chatbot' ? 'message bot' : 'message user';
        return <div className={messageClass}>
            <span className='author'>{author}</span>
            <span className='date'>({local_date})</span>
            :
            {content}
        </div>
    }

}
Message.propTypes = {
    type: PropTypes.string.isRequired,
    author: PropTypes.string,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
export default Message
