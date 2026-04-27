#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
pip install -r backend/requirements.txt

# Run migrations
python backend/manage.py migrate

# Collect static files
python backend/manage.py collectstatic --no-input
