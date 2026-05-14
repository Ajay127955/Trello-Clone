import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async

class KanbanConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.board_id = self.scope['url_route']['kwargs']['board_id']
        self.group_name = f'board_{self.board_id}'
        self.user = self.scope['user']

        # Join board group
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

        if self.user.is_authenticated:
            await self.update_presence(True)
            # Broadcast presence update
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': 'presence_message',
                    'user_id': self.user.id,
                    'username': self.user.username,
                    'is_online': True
                }
            )

    async def disconnect(self, close_code):
        if self.user.is_authenticated:
            await self.update_presence(False)
            # Broadcast presence update
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': 'presence_message',
                    'user_id': self.user.id,
                    'username': self.user.username,
                    'is_online': False
                }
            )

        # Leave board group
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    @database_sync_to_async
    def update_presence(self, is_online):
        from .models import Presence, Board
        presence, _ = Presence.objects.get_or_create(user=self.user)
        presence.is_online = is_online
        if is_online:
            try:
                board = Board.objects.get(id=self.board_id)
                presence.current_board = board
            except:
                pass
        presence.save()

    # Receive message from WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        msg_type = data.get('type')

        if msg_type == 'typing':
            await self.channel_layer.group_send(
                self.group_name,
                {
                    'type': 'typing_message',
                    'username': self.user.username if self.user.is_authenticated else "Guest",
                    'is_typing': data.get('is_typing', False)
                }
            )

    # Receive message from group
    async def kanban_message(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'msg_type': event['msg_type'],
            'message': event['message'],
            'data': event.get('data', {})
        }))

    async def presence_message(self, event):
        await self.send(text_data=json.dumps({
            'msg_type': 'presence_update',
            'data': {
                'user_id': event['user_id'],
                'username': event['username'],
                'is_online': event['is_online']
            }
        }))

    async def typing_message(self, event):
        await self.send(text_data=json.dumps({
            'msg_type': 'typing_indicator',
            'data': {
                'username': event['username'],
                'is_typing': event['is_typing']
            }
        }))
