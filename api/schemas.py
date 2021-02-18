from rest_marshmallow import Schema, fields

from .models import Ticker

class TickerSchema(Schema):
    name = fields.String(max=50, dump_only=True)
    symbol = fields.String(max=10, dump_only=True)