from flask import Flask, request, json, jsonify
import time 
import base64
import cv2
import numpy as np

app = Flask(__name__)

#Filename of the JSON database
filename = 'HerbalFinder/data/accounts.json'

def readb64(raw_64_string):
    nparr = np.fromstring(base64.b64decode(raw_64_string), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img 

def image_resize(image, width = None, height = None):
    dim = None
    (h, w) = image.shape[:2]

    if width is None and height is None:
        return image

    if width is None:
        r = height / float(h)
        dim = (int(w * r), height)
    else:
        r = width / float(w)
        dim = (width, int(h * r))

    resized = cv2.resize(image, dim, interpolation = cv2.INTER_AREA)

    return resized

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

# Post Image Data
@app.route('/predict', methods=['POST'])
def predict_given_image():
    input_json = request.json 

    input_image = input_json["input_image"]
    # img = readb64(input_image)
    # img = image_resize(img, height=500)
    # cv2.imshow("Testing Input", img)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()

    # print("Input Image Received:", input_image)
    # Return 
    # {
    #     Class 1 : 1
    #     Class 2 : 2
    #     Class 3 : 1
    # }
    response = {"predictions" : ["Artocarpus Heterophyllus", "Artocarpus Heterophyllus", "Artocarpus Heterophyllus", "Artocarpus Heterophyllus"]}

    return jsonify(response)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4000)