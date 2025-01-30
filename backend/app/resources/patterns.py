# backend/app/resources/patterns.py

from flask_restful import Resource
from flask import jsonify

class Patterns(Resource):
    def get(self):
        """
        Get patterns
        ---
        description: Retrieve a list of patterns
        responses:
          200:
            description: A list of patterns
            content:
              application/json:
                schema:
                  type: array
                  items:
                    type: string
        """
        return jsonify(["pattern1", "pattern2", "pattern3"])
