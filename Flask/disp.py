from flask import Flask, render_template
import random
import datetime

app = Flask(__name__)


@app.route('/')
def hello():
    rnum = random.randint(1, 100)
    return render_template('index.html', num=rnum)

@app.route('/GetTime')
def timeout():
    #just get hour and minutes
    current_time = datetime.datetime.now().strftime('%H:%M')
    return render_template('time.html', cur_time=current_time)


if __name__ == '__main__':
    app.run(debug=True)