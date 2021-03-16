# Generated by Django 2.2.18 on 2021-03-16 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ticker',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('symbol', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'unique_together': {('symbol',)},
            },
        ),
    ]