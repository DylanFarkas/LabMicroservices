from fastapi import FastAPI

app = FastAPI()

@app.get("/cereales")
def get_cereales():
    return {
        "cereales": [ "Froot loops", "Zucaritas", "Choco krispis"]
    }