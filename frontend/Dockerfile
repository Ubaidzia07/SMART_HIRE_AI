# Frontend Dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY . .

EXPOSE 3000

# Serve static files via Python's built-in HTTP server
CMD ["python3", "-m", "http.server", "3000"]
