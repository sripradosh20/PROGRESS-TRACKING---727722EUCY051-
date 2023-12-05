// import React from "react";

// function Child(props)
// {
//     return (
//         <div>
//             <h1 >
//             {props.colour}
//             </h1>
//         </div>
//     )
// };
// export default Child

import React from 'react';
function Child({ onMessageSend }) {
 return (
 <div>
 <h2>Child Component</h2>
 <button onClick={() => onMessageSend('Hello from Child!')}>
 Send Message to Parent
 </button>
 </div>
 );
}
export default Child;