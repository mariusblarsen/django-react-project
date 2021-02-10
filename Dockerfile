FROM python:3
ENV PYTHONBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=config.settings

WORKDIR /app

RUN pip install --upgrade pip
COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . .