# API endpoints
from app import app, db


@app.route('/', methods=['POST', 'GET'])
def handle_persons():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_person = PersonsModel(
                username=data['username'], email=data['email'], password=data['password'])
            db.session.add(new_person)
            db.session.commit()
            return {"message": f"person {new_person.username} has been created successfully."}
        else:
            return {"error": "The request payload is not in JSON format"}

    elif request.method == 'GET':
        persons = PersonsModel.query.get(person.email)
        results = [
            {
                "email": person.email,
                "password": person.password
            } for person in persons]
        return {'person you look for': results}
        # return {"count": len(results), "persons": results}
