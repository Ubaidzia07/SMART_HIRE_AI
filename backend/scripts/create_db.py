from src.db.database import engine, Base
import src.db.models.resume  # noqa: F401

def run():
    Base.metadata.create_all(bind=engine)
    print("DB created or verified")

if __name__ == "__main__":
    run()
