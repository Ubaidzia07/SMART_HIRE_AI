# Smart Hire AI - Backend Service

This directory contains the Python-based backend API for the Smart Hire AI platform. It's built using **FastAPI** and handles all business logic, AI processing, and database interactions.

## Technology Stack

* **Framework:** FastAPI
* **Database:** PostgreSQL
* **ORM:** SQLAlchemy 2.0
* **Migrations:** Alembic
* **AI/NLP:** spaCy
* **Environment:** Docker, Uvicorn

## Project Structure

```bash
backend/
├── alembic/              # Alembic migration scripts
├── scripts/              # Utility scripts (e.g., create_db.py)
├── src/
│   ├── ai/               # AI/NLP logic (e.g., parser.py)
│   ├── app/              # FastAPI app logic
│   │   ├── routes/       # API endpoints (e.g., resume_routes.py)
│   │   └── main.py       # Main FastAPI app declaration
│   ├── db/
│   │   ├── models/       # SQLAlchemy models (e.g., resume.py)
│   │   └── database.py   # DB Session, Engine, Base
│   ├── ingestion/        # File processing (e.g., extractor.py)
│   ├── schemas/          # Pydantic schemas (e.g., resume.py)
│   └── uploads/          # [GitIgnored] Storage for uploaded files
├── .env                  # [GitIgnored] Environment variables
├── .gitignore            # Git ignore rules
├── alembic.ini           # Alembic config
├── Dockerfile            # Docker build file
└── requirements.txt      # Python dependencies
```

## Week 1 Setup & Running

Instructions for the initial setup of the ingestion pipeline.

### 1. Environment Variables

Create a `.env` file in the `backend/` directory:

```ini
# This must match your docker-compose.yml
DATABASE_URL=postgresql+psycopg2://user:password@db:5432/smart_hire_db
```

### 2. Build and Run with Docker

From the project's root directory (where `docker-compose.yml` lives):

```bash
# Build the images and run containers in detached mode
docker-compose up --build -d
```

### 3. Create Initial Database Tables (One-Time Only)

After the containers are running, run the initial DB creation script *inside* the backend container:

```bash
docker-compose exec backend python scripts/create_db.py
```

**Note:** After Week 2, all database changes will be handled by Alembic.

### 4. Test the API

The API server will be running at `http://localhost:8000`.
The React frontend at `http://localhost:3000` can now connect to it.

* **API Docs:** `http://localhost:8000/docs`
* **Upload Endpoint:** `POST /resumes/upload`