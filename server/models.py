# Database Models
from app import db
from passlib.hash import pbkdf2_sha256 as sha256

class PersonModel(db.Model):
    __tablename__ = 'persons'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200))
    email = db.Column(db.String(200))
    password = db.Column(db.String(200))

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    @staticmethod
    def generate_hash(password):
        return sha256.hash(password)
    
    @staticmethod
    def verify_hash(password, hash):
        return sha256.verify(password, hash)


# class DetailsModel(db.Model):
#     __tablename__ = 'details'
#     id = db.Column(db.Integer, primary_key=True)
#     address = db.Column(db.String(200))
#     email = db.Column(db.String(200))
#     password = db.Column(db.String(200))

#     def __init__(self, username, email, password):
#         self.username = username
#         self.email = email
#         self.password = password
