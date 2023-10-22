// socket.js

import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socketInstance:any = null;

export const useSocket = (roomName:any) => {
  const [socketStatus, setSocketStatus] = useState('Connecting...');
  const [message, setMessage] = useState({});

  useEffect(() => {
    if (!socketInstance) {
      socketInstance = io('http://localhost:3001/sessions', {
        auth: {
          token: '12345', // Your authentication token
          room: roomName, // Use the passed roomName
        },
      });


      socketInstance.on('message', (mgs:any) => {
        console.log('Rec message:', mgs);
        
      });
      socketInstance.on('charging_sessionId', (mgs:any) => {
        setMessage(mgs)
      });
      socketInstance.on('initiate_sessionId', (mgs:any) => {
        setMessage(mgs)
      });
      socketInstance.on('preparing_sessionId', (mgs:any) => {
        setMessage(mgs)
      });
      socketInstance.on('end_sessionId', (mgs:any) => {
        setMessage(mgs)
      });
      socketInstance.on('other_sessionId', (mgs:any) => {
        setMessage(mgs)
      });
    }

    socketInstance.on('connect', () => {
      setSocketStatus('Connected to the socket server');
    });

    socketInstance.on('disconnect', () => {
      setSocketStatus('Disconnected from the socket server');
    });

    return () => {
      // Disconnect logic, if necessary
    };
  }, [roomName]); // Ensure that roomName triggers re-initialization when it changes

  return {
    socketStatus,
    message,
    // Add other properties or functions as needed
  };
};
