import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios/index";
import Message from './components/message'
import MessageWriter from './components/message_writer'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        const self = this;
        axios.get('message/index')
            .then(function (response) {
                const data = response.data;
                self.setState({messages: data}, ()=>{
                    self.messageList.scrollTop = self.messageList.scrollHeight;
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    postMessage(message){
        const self = this;
        axios.post('message', {authenticity_token: window._token, message})
            .then(function (response) {
                const data = response.data;
                let messages = self.state.messages;
                messages = messages.concat(data.message, data.answer);
                self.setState({messages}, ()=>{
                    self.messageList.scrollTop = self.messageList.scrollHeight;
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return (
            <div className="chat">
                <div className='message-list' ref={el => { this.messageList = el; }}>
                    {this.state.messages.map((msg)=>
                        <Message type={msg.message_type} author={msg.author} date={msg.created_at} content={msg.content} key={'msg_'+msg.id}/>
                    )}
                </div>
                <MessageWriter postMessage={(msg)=>this.postMessage(msg)}/>
            </div>
        )
    }
}
ReactDOM.render( <App />, document.getElementById('app'));