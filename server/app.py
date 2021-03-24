from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

ENV = 'dev'

if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345678@localhost:5432/persons_api'
else:
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class PersonsModel(db.Model):
    __tablename__ = 'persons'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    age = db.Column(db.Integer)
    github = db.Column(db.String(200))

    def __init__(self, name, age, github):
        self.name = name
        self.age = age
        self.github = github


@app.route('/')
def index():
    return 'hello'


@app.route('/persons', methods=['POST', 'GET'])
def handle_persons():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_person = PersonsModel(
                name=data['name'], age=data['age'], github=data['github'])
            db.session.add(new_person)
            db.session.commit()
            return {"message": f"person {new_person.name} has been created successfully."}
        else:
            return {"error": "The request payload is not in JSON format"}

    elif request.method == 'GET':
        persons = PersonsModel.query.all()
        results = [
            {
                "name": person.name,
                "age": person.age,
                "github": person.github
            } for person in persons]

        return {"count": len(results), "persons": results}


if __name__ == '__main__':
    app.run()
