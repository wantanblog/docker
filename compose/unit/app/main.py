from flask import Flask, render_template
from pymongo import MongoClient

application = Flask(__name__)

#デフォルトルート
@application.route('/')
def index():
    client = mongo_init()
    sample = client.test.doc.find()
    return render_template('index.html',contents=sample)

def mongo_init():
    host = 'compose_dbserver_1'
    port = 27017
    db = 'test'
    user = 'wantan'
    pwd = 'wantan'
    client = MongoClient(host, port)
    client[db].authenticate(user, pwd)
    return client
