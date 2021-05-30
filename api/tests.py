from django.test import TestCase

from .models import Ticker

TICKER_SYMBOL = "TEST"
TICKER_NAME = "Test ticker"

class TickerTestCase(TestCase):
    def setUp(self):
        Ticker.objects.create(
            symbol=TICKER_SYMBOL,
            name=TICKER_NAME
        )
    
    def test_name(self):
        ticker = Ticker.objects.get(symbol=TICKER_SYMBOL)
        self.assertEqual(ticker.symbol, TICKER_SYMBOL)

