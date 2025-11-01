from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/metrics')
def metrics():
    data = {
        "Revenue": round(random.uniform(10000, 50000), 2),
        "Customer_Satisfaction": round(random.uniform(70, 100), 2),
        "Conversion_Rate": round(random.uniform(1, 10), 2)
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
