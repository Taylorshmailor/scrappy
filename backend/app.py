# backend/app/app.py

from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
from app import create_app

# Create Flask app instance
app = create_app()

# Set up Swagger UI
SWAGGER_URL = '/swagger'  # The URL for the Swagger UI
API_URL = '/static/swagger.json'  # The path to your Swagger JSON specification

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={  # Swagger UI configuration options
        'app_name': "Flask API"
    }
)

# Register the Swagger UI blueprint
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)

# Serve Swagger JSON file
@app.route('/static/swagger.json')
def swagger_json():
    """
    This endpoint serves your Swagger API specification (swagger.json).
    It can be auto-generated, or you can manually create it.
    """
    from flask import jsonify
    from app.resources.patterns import Patterns

    # Example API documentation in Swagger format
    swagger_spec = {
        "openapi": "3.0.0",
        "info": {
            "title": "Flask API",
            "version": "1.0.0",
            "description": "A simple API to manage patterns."
        },
        "paths": {
            "/patterns/": {
                "get": {
                    "summary": "Get patterns",
                    "description": "Returns a list of available patterns",
                    "responses": {
                        "200": {
                            "description": "A list of patterns",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return jsonify(swagger_spec)

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
