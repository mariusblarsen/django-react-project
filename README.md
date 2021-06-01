# Just a simple Django and React project
![Django CI](https://github.com/mariusblarsen/django-react-project/actions/workflows/tests.yml/badge.svg)
[![codecov](https://codecov.io/gh/mariusblarsen/django-react-project/branch/main/graph/badge.svg?token=KMNATE6XJ0)](https://codecov.io/gh/mariusblarsen/django-react-project)

A little project for learning purposes and fun, to get deeper knowledge of React and other tools along the way. Resulting in a foundation for future projects.

## Setup
Add a Django secret key to `SECRET_KEY` in an environment file at root.

### Prerequisites
- mongoDB
- docker-compose

### With docker-compose
Navigate to folder *django_react_project* and run `docker-compose up`.
The React app is now available at port 3001, with api and django-admin page at port 8000

## Roadmap

- [x] Setup Django backend
- [x] Setup React app
- [x] Setup Docker
- [x] Setup docker-compose
- [x] Setup DRF Api
- [x] Integrate DRF Api with React
- [x] MongoDB
- [x] CI - Github Actions
- [ ] Navigation menu
- [ ] ...