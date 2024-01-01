from flask import Flask, request, json, jsonify

app = Flask(__name__)

#Filename of the JSON database
filename = 'data/accounts.json'

@app.route('/login', methods = ['POST'])
def CheckAccount():
    f = open(filename)
    db = json.load(f)
    input = request.json
    #Initially set flag to False
    flag = False
    for i in db['users']:
        if ((db['users'][i]['username'] == input['username']) or (db['users'][i]['email'] == input['username'])) and db['users'][i]['password'] == input['password']:
            #Set flag to True if there is an account match and break the loop
            flag = True
            break
    f.close()
    response = {}
    response['match'] = flag
    print(jsonify(response))
    return jsonify(response)

#EDIT FOR SIGNUP
@app.route('/signup', methods = ['POST'])
def SignUpAccount():
    f = open(filename)
    db = json.load(f)
    print(db)
    input = request.json
    #Initially set the flag to false, assume that there is no match
    flag = False
    for i in db['users']:
        if (db['users'][i]['username'] == input['username']) or (db['users'][i]['email'] == input['email']):
            flag = True
            break
    f.close()
    f = open(filename, 'w')
    if flag == False:
        #Add Entries in Database
        db_size = len(db['users'])
        db_size = str(db_size)
        db['users'][db_size] = {'id': db_size, 'username': input['username'], 'email': input['email'], 'password': input['password']}
    print(db)
    json.dump(db, f, indent = 4)
    f.close()
    response = {}
    response['match'] = flag
    print(jsonify(response))
    return jsonify(response)

# Testing
@app.route('/test', methods = ['GET'])
def test_connection():
    response = {"text" : "Hello World"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4000)