from flask import Flask, render_template
import random
import datetime

app = Flask(__name__)


@app.route('/')
def hello():
    rnum = random.randint(1, 100)
    current_year = str(datetime.datetime.now().minute)
    return render_template('index.html', num=rnum, cur_year=current_year)


if __name__ == '__main__':
    app.run(debug=True)