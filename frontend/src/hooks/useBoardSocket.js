import { useEffect, useRef, useState } from 'react';

const useBoardSocket = (boardId, onMessage) => {
    const socketRef = useRef(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (!boardId) return;

        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        // Adjust this if your backend is on a different host
        const host = import.meta.env.VITE_WS_URL || 'localhost:8000';
        const socketUrl = `${protocol}//${host}/ws/board/${boardId}/`;

        console.log(`Connecting to WebSocket: ${socketUrl}`);
        
        const connect = () => {
            const socket = new WebSocket(socketUrl);
            socketRef.current = socket;

            socket.onopen = () => {
                console.log('WebSocket Connected');
                setIsConnected(true);
            };

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (onMessage) onMessage(data);
            };

            socket.onclose = (e) => {
                console.log('WebSocket Disconnected. Reconnecting in 3s...', e.reason);
                setIsConnected(false);
                setTimeout(connect, 3000);
            };

            socket.onerror = (err) => {
                console.error('WebSocket Error:', err);
                socket.close();
            };
        };

        connect();

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [boardId]);

    const sendMessage = (data) => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify(data));
        }
    };

    return { isConnected, sendMessage };
};

export default useBoardSocket;
