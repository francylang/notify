import React from 'react';
import Classroom from './Classroom/Classroom.js'
import '../../index.css';
import key from './key.js'


const App = () => {
  return (
    <div className='app'>
      <Classroom />
    </div>
  );
}
export default App;

// async function sendText(event) {
//   const params = new URLSearchParams();
//   params.append('From', '+17207092699');
//   params.append('To', '+13033782133');
//   params.append('Body', 'hey its travis');
//   const response = await axios.post(
//     'https://api.twilio.com/2010-04-01/Accounts/AC90e3876800fe644ddecea48a3f827877/Messages.json',
//     params,
//     {
//       auth: {
//         username: 'AC90e3876800fe644ddecea48a3f827877',
//         password: 'ef6ecee314dd69b01b48f40723e865d9'
//       }
//     }
//   ).then(res => res.data)
//   console.log(response)
//   return response;
// }
