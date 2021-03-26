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
# /api/auth
class PersonRegistration(Resource):
    def post(self):
        if request.is_json:
            data = request.get_json()
            if models.PersonModel.find_by_email(data['email']):
                abort(400, "This person already exists")
            else:
                token = jwt.encode({'person': {'email': data['email'], 'username': data['username']}, 'exp': datetime.datetime.utcnow()+ datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
                new_person = models.PersonModel(
                    username=data['username'],
                    email=data['email'],
                    password = models.PersonModel.generate_hash(data['password'])
                )
                db.session.add(new_person)
                db.session.commit()
                # return {"message": f"person {new_person.username} has been created successfully."}
                return jsonify({'token': token.decode('UTF-8')})
        else:
            return {"error": "The request payload is not in JSON format"}

# login
# GET
# /api/auth
# class PersonLogin(Resource):
#     def post(self):
#         if request.is_json
#             data = request.get_json()

