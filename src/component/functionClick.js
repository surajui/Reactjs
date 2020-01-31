import React from 'react'
import { Button } from 'react-bootstrap'


function FunctionClick(){

    function clickHandler(){
        console.log("clicked function")
    }
    return(
        <div>
            <Button variant="secondary" onClick={clickHandler}>Click</Button>
        </div>
    )
}
export default FunctionClick;