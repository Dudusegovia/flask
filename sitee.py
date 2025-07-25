from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def homepage():
    return "homepage"

@app.route("/bro")
def bro():
    return render_template("homepage.html")

@app.route("/user/<nome_user>")
def user(nome_user):
    return render_template('bro.html', nome_user=nome_user)



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
    