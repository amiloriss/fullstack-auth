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

    # if person already exists with email
    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email = email).scalar()
        
    @staticmethod
    def generate_hash(password):
        return sha256.hash(password)
    
    @staticmethod
    def verify_hash(password, hash):
        return sha256.verify(password, hash)