import json
from channels.generic.websocket import AsyncWebsocketConsumer

class KanbanConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.board_id = self.scope['url_route']['kwargs']['board_id']
        self.group_name = f'board_{self.board_id}'

        # Join board group
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave board group
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        # We mostly use WebSockets for broadcasting server-side changes,
        # but if clients send messages, we can handle them here.
        pass

    # Receive message from group
    async def kanban_message(self, event):
        message = event['message']
        msg_type = event['msg_type']
        data = event.get('data', {})

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'msg_type': msg_type,
            'data': data
        }))
