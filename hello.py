from flask import Flask, render_template, url_for
import csv, random

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return 'Index Page'

@app.route('/hello/')
@app.route('/hello/<username>')
def hello_name(username=None):
    return render_template('hello.html', name=username)

@app.route('/map/')
def blog():
    return render_template('map.html')



if __name__ == '__main__':
    app.run(debug=True)

