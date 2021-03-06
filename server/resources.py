# API endpoints
from app import app, db
from flask import jsonify, abort
import jwt
import datetime
from flask_restful import Resource
from flask_restful import request
import models

# register new person
# POST
# /auth


class PersonRegistration(Resource):
    def post(self):
        if request.is_json:
            data = request.get_json()
            if models.PersonModel.find_by_email(data['email']):
                return 'This person already exists', 400
            else:
                new_person = models.PersonModel(
                    username=data['username'],
                    email=data['email'],
                    password=models.PersonModel.generate_hash(data['password'])
                )
                db.session.add(new_person)
                db.session.commit()
                return 'User has been created'
        else:
            return {"error": "The request payload is not in JSON format"}

# login
# POST
# /auth/login


class PersonLogin(Resource):
    def post(self):
        if request.is_json:
            data = request.get_json()
            person = models.PersonModel.find_by_email(data['email'])
            if person and models.PersonModel.verify_hash(data['password'], person.password):
                token = jwt.encode({'person': {'email': person.email, 'username': person.username},
                                    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
                return jsonify(token=token.decode('UTF-8'), email=person.email, username=person.username)
            else:
                return "Person not found", 400
        else:
            return {"error": "The request payload is not in JSON format"}
