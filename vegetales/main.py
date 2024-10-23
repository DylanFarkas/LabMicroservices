from fastapi import FastAPI

app = FastAPI()

@app.get("/vegetales")
def get_vegetales():
    return {
        "vegetales": ["Cebolla", "Tomate", "Lechuga", "Zanahoria"],

    }
