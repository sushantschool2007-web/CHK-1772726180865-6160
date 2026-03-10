"""
MongoDB connection utility for EmpathyFirst.
Import `db` from this module to access the MongoDB database.

Usage:
    from EMPTHYFIRST.mongo import db

    # Insert a document
    db.chat_logs.insert_one({...})

    # Query documents
    docs = list(db.chat_logs.find({"user_id": "abc123"}))
"""

import pymongo
from django.conf import settings


def get_mongo_client():
    """Return a MongoClient using settings from settings.py."""
    uri = getattr(settings, "MONGODB_URI", "mongodb://localhost:27017/")
    client = pymongo.MongoClient(uri, serverSelectionTimeoutMS=5000)
    return client


# Module-level connection (lazy initialisation on first import)
_client = None
_db = None


def get_db():
    """Return the MongoDB database instance (singleton)."""
    global _client, _db
    if _db is None:
        _client = get_mongo_client()
        db_name = getattr(settings, "MONGODB_NAME", "empathyfirst")
        _db = _client[db_name]
    return _db


# Convenience alias – `from EMPTHYFIRST.mongo import db`
db = get_db()
