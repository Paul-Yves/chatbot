import React, { Component } from "react";
import PropTypes from 'prop-types';

class MessageWriter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    render(){
        return <div className='message-composer'>
            <div className='composer'>
                <textarea value={this.state.content} onChange={(e)=>this.setState({content: e.target.value})} />
            </div>
            <div className='sender'>
                <button onClick={()=>this.props.postMessage(this.state.content)}>Send</button>
            </div>
        </div>
    }

}
MessageWriter.propTypes = {
    postMessage: PropTypes.func.isRequired
};
export default MessageWriter