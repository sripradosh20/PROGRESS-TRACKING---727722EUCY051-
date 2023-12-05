import React from 'react'

function Func (){
return <Greet value="tup"/>
}

function Greet (props) {
return(
   <h1>I'm in {props.value}</h1>
)
}

export default Func