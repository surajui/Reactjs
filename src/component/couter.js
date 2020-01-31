import React from 'react'
import { Button } from 'react-bootstrap'

class Couter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
Increament(){
    // this.state.count = this.state.count+1
    // console.log(this.state.count)
    this.setState({
        count:this.state.count+1  
    },()=>{
        console.log('callback value',this.state.count)
    })
    console.log(this.state.count)
}


    render(){
        return(
            <div>
    <h2>Count {this.state.count}</h2>
                <Button variant="success" onClick={()=>this.Increament()}>Increment</Button>
            </div>
        )
    }
}
export default Couter;