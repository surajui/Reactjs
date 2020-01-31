import React from 'react'
import {Button,ButtonToolbar} from 'react-bootstrap';
// function hello(){
//     const a ='welcome to reactjs';
// return <h5>{a}</h5>
// }


// function App(){
//     return <Suraj/>
// }
// function Suraj(){
//     const a = 'this is greeting message';
// return <h4>{a}</h4>
// }

// function Greet(){
//     const a ="this is react js"
//     return  <Suraj value = {a}/>
// }
// function  Suraj(props){
// return <h5>{props.value}</h5>
// }
class Greet extends React.Component{
render(){
    return(
<ButtonToolbar>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="info">Info</Button>
<Button variant="light">Light</Button>
<Button variant="dark">Dark</Button>
<Button variant="link">Link</Button>
</ButtonToolbar>
    )
}

}





export default Greet;