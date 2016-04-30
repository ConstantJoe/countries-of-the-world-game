from flask import Flask, render_template, url_for
import csv, random

app = Flask(__name__, static_url_path='/static')

@app.route('/countries-of-the-world-game/')
def blog():
    return render_template('map.html')



if __name__ == '__main__':
    app.run(debug=True)

