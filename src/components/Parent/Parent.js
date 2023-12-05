import Child from "../Child/Child";

// function App()
// {
//     return (
//         <div>
//             <h1>Im Parent!</h1>
//                 <Child colour="red"/>
//             </div>
//     )
// }
// export default App;
import React, { useState } from 'react';
// import Child from './Child';
function Parent() {
 const [message, setMessage] = useState('');
 const handleMessage = (newMessage) => {
 setMessage(newMessage);
 };
 return (
 <div>
 <h1>Parent Component</h1>
 <p>Message from Child: {message}</p>
 <Child onMessageSend={handleMessage} />
 </div>
 );
}
export default Parent;