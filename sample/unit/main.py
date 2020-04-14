from flask import Flask

application = Flask(__name__)

#default
@application.route('/')
def index():
    print('test')
    return "Hello Flask"
