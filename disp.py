from flask import Flask, render_template

app = Flask(__name__)


# @app.route('/bye')
# def bye():
#     return "ok bye!"

# #to greet a user
# @app.route('/greet/<name>')
# def greet(name):
#     return "Hello, "+name
   
@app.route('/')
def hello():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)