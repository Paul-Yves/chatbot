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
                self.setState({messages: data});
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
                messages.concat(data.message, data.answer);
                self.setState({messages});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return (
            <div className="chat">
                <div className='message-list'>
                    {this.state.messages.map((msg)=>
                        <Message type={msg.type} author={msg.author} date={msg.created_at} content={msg.content}/>
                    )}
                </div>
                <MessageWriter postMessage={(msg)=>this.postMessage(msg)}/>
            </div>
        )
    }
}
ReactDOM.render( <App />, document.getElementById('app'));