# Agency Auth Microservice

## Local Setup

```bash
# Copy env file and then replace with your postges data
cp example.env .env

# Create a virtual environment to isolate our package dependencies locally
python3 -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run migrations
python3 manage.py migrate

# Create admin/superuser
python3 manage.py createsuperuser

# Start project
python3 manage.py runserver
```

## Heroku setup

```bash
# Set SECRET_KEY env
heroku config:set SECRET_KEY=<SECRET_KEY> -a <APP_NAME>

# Build container
heroku container:push web --app <APP_NAME>
heroku container:release web --app <APP_NAME>

# Set heroku stack as "container"
heroku stack:set container -a <APP_NAME>

# Install manifiest
heroku plugins:install @heroku-cli/plugin-manifest

# Add heroku remote
heroku git:remote -a <APP_NAME>

# Deploy with manifiest
git push heroku master

# Create Postgres Add-On
heroku addons:create heroku-postgresql:hobby-dev -a <APP_NAME>

# Run migrations
heroku run python manage.py migrate -a <APP_NAME>

# Create admin/superuser
heroku run python manage.py createsuperuser -a <APP_NAME>
```
