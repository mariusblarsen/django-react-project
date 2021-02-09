FROM python:3
ENV PYTHONBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=config.settings

WORKDIR /app/backend
ADD . /app/backend

RUN pip install --upgrade pip
RUN pip install pipenv
COPY requirements.txt /app/backend/
RUN pip install -r requirements.txt

EXPOSE 8000
CMD [ "/app/backend/manage.py", "runserver", "0.0.0.0:8000" ]