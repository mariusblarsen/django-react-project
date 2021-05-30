from django.test import TestCase


class DummyTestCase(TestCase):
    def test_true(self):
        self.assertTrue(True)