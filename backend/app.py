from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

with open("phishing_email_model.pkl", "rb") as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    email_text = [data['emailText']]
    prediction = model.predict(email_text)[0]
    result = "Phishing Email" if prediction == 1 else "Safe Email"
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
