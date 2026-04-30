#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
pip install -r backend/requirements.txt

# Run migrations
python backend/manage.py migrate
python backend/migrate_roles.py

# Collect static files
python backend/manage.py collectstatic --no-input
