# backend/app/__init__.py

from flask import Flask
from flask_restful import Api
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Set up API
api = Api(app)

# Import resources
from app.resources.patterns import Patterns

# Add resources to API
api.add_resource(Patterns, '/patterns/')

# This ensures that the app object can be imported when needed
def create_app():
    return app
