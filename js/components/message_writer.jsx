import React, { Component } from "react";
import PropTypes from 'prop-types';

class MessageWriter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    sendMessage(){
        this.props.postMessage(this.state.content);
        this.setState({content: ''});
    }
    onEnterPress(event){
        if(event.keyCode == 13 && event.shiftKey == false) {
            event.preventDefault();
            this.sendMessage();
        }
    }

    render(){
        return <div className='message-composer'>
            <div className='composer'>
                <textarea value={this.state.content} onChange={(e)=>this.setState({content: e.target.value})} maxLength="512"
                          onKeyDown={(e)=>this.onEnterPress(e)} />
            </div>
            <div className='sender'>
                <button onClick={()=>this.sendMessage()}>Send</button>
            </div>
        </div>
    }

}
MessageWriter.propTypes = {
    postMessage: PropTypes.func.isRequired
};
export default MessageWriter