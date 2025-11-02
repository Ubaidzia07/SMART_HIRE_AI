# Use a specific, stable base image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# 1. Copy ONLY the requirements files
# This uses the Docker cache (see .dockerignore)
COPY requirements.txt requirements-dev.txt* ./

# 2. Install dependencies
# This layer will now be CACHED as long as
# your requirements.txt file does NOT change.
RUN pip install --no-cache-dir -r requirements.txt

# 3. NOW, copy the rest of your application code
# This copies everything *except* what's in .dockerignore
COPY . .

# 4. Expose the port the app will run on
EXPOSE 8000

# 5. This is the command from your docker-compose.yml
#    Uvicorn will run our app defined in src/app/main.py
CMD ["uvicorn", "src.app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]