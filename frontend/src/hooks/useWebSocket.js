import { useEffect, useRef } from 'react';

const useWebSocket = (boardId, onMessage) => {
    const socketRef = useRef(null);

    useEffect(() => {
        if (!boardId) return;

        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        // In production, use your actual domain. In dev, localhost:8000.
        let host = import.meta.env.VITE_WS_URL || 'localhost:8000';
        
        // Remove protocol if present
        host = host.replace(/^https?:\/\//, '');
        
        const url = `${protocol}://${host}/ws/board/${boardId}/`;

        console.log(`Connecting to WebSocket: ${url}`);
        const socket = new WebSocket(url);
        socketRef.current = socket;

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('WebSocket Message:', data);
            if (onMessage) onMessage(data);
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        socket.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        return () => {
            socket.close();
        };
    }, [boardId]);

    const sendMessage = (message) => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify(message));
        }
    };

    return { sendMessage };
};

export default useWebSocket;
