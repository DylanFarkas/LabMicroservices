from fastapi import FastAPI


app = FastAPI()


@app.get("/bebidas")
def read_bebidas():
    return {
        "bebidas": ["Coca Cola", "Pepsi", "Agua Mineral", "Café"]
    }
