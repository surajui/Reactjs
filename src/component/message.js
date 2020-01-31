import React from 'react'
import {Button} from 'react-bootstrap'
class Message extends React.Component{
    constructor(){
        super()
        this.state={
  messege:'welcome ojas'
        }
    }
    changeMessage(){
     this.setState({
         messege:'thank you for visiting'
     })
    }
    render(){
        return(
            <div>
       <h1>{this.state.messege}</h1>
       <Button variant="success" onClick={()=>this.changeMessage()}>Success</Button>
            </div>
        )
    }
}
export default Message;