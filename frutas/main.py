from fastapi import FastAPI

app = FastAPI()

@app.get("/frutas")
async def get_frutas():
    return {
        "frutas": [ "Manzana", "Pera", "Banano", "Uva", "Piña", "Mango"]
    }