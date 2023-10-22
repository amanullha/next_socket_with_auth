"use client"

import { useSocket } from "./socketInstance";
  const roomId='sessionId'
 function Socket() {

    const { socketStatus, message } = useSocket(roomId); // Pass the room name as a parameter
// let message:any;
// let socketStatus:any;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>WebSocket Connection Status: {socketStatus}</h1>
        <div>
          <h2>Message:</h2>
          <ul>
            <p>{JSON.stringify(message)}</p>
          </ul>
        </div>
      </div>
    </main>
  );
}

// export default Socket;
// "use client"
// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// function Socket() {
//   const [socketStatus, setSocketStatus] = useState('Connecting...');
//   const [messages, setMessages] = useState([]); // New state for incoming messages

//   useEffect(() => {
//     const socket = io('http://localhost:3001/sessions', {
//       auth: {
//         token: '12345', // Your authentication token
//         room: "queue"
//       },
//     });

//     socket.on('connect', () => {
//       setSocketStatus('Connected to the socket server');
//     });

//     socket.on('disconnect', () => {
//       setSocketStatus('Disconnected from the socket server');
//     });

//     // Listen for incoming messages and add them to the state
//     socket.on('message', (message) => {
//       console.log("message: ", message);

//       // setMessages((prevMessages) => [...prevMessages, message]);
//     });
//     socket.on('test', (data) => {
//       // Handle the incoming data here
//       console.log('Received data:', data);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div>
//         <h1>WebSocket Connection Status: {socketStatus}</h1>
//         <div>
//           <h2>Messages:</h2>
//           <ul>
//             {messages.map((message, index) => (
//               <li key={index}>{message}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// }

export default Socket;
